from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from airtable_service import airtable_service


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Contact Form Models
class ContactFormSubmission(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=1, max_length=2000)

class ContactFormResponse(BaseModel):
    success: bool
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Portfolio API - Ready!", "status": "healthy"}

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormResponse)
async def submit_contact_form(submission: ContactFormSubmission):
    """
    Submit a contact form - stores in Airtable
    """
    try:
        if not airtable_service.is_configured():
            raise HTTPException(
                status_code=500,
                detail="Contact form is not configured. Please contact the administrator."
            )
        
        # Create record in Airtable
        record = airtable_service.create_contact_submission(
            name=submission.name,
            email=submission.email,
            message=submission.message,
            subject=submission.subject
        )
        
        logger.info(f"Contact form submission created in Airtable: {record['id']}")
        
        return ContactFormResponse(
            success=True,
            message="Thank you for reaching out! I'll get back to you soon."
        )
    
    except Exception as e:
        logger.error(f"Contact form submission failed: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to submit contact form. Please try again later or email directly."
        )

# Admin endpoint to view submissions (optional)
@api_router.get("/contact/submissions")
async def get_contact_submissions():
    """
    Get all contact submissions from Airtable (for admin use)
    """
    try:
        if not airtable_service.is_configured():
            raise HTTPException(status_code=500, detail="Airtable not configured")
        
        submissions = airtable_service.get_all_submissions()
        return {"submissions": submissions, "count": len(submissions)}
    except Exception as e:
        logger.error(f"Failed to fetch submissions: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)