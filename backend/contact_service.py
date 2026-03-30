from motor.motor_asyncio import AsyncIOMotorClient
import os
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class ContactService:
    def __init__(self, db):
        self.db = db
        self.collection = db.contact_submissions
        logger.info("Contact service initialized with MongoDB")
    
    async def create_contact_submission(self, name: str, email: str, message: str, subject: str = None):
        """Create a new contact submission in MongoDB"""
        try:
            submission = {
                "name": name,
                "email": email,
                "message": message,
                "subject": subject,
                "timestamp": datetime.utcnow(),
                "status": "New",
                "created_at": datetime.utcnow().isoformat()
            }
            
            result = await self.collection.insert_one(submission)
            logger.info(f"Contact submission created: {result.inserted_id}")
            return {"id": str(result.inserted_id), "success": True}
        except Exception as e:
            logger.error(f"Failed to create contact submission: {str(e)}")
            raise Exception(f"Failed to save contact submission: {str(e)}")
    
    async def get_all_submissions(self):
        """Get all contact submissions"""
        try:
            cursor = self.collection.find().sort("timestamp", -1)
            submissions = await cursor.to_list(length=1000)
            return submissions
        except Exception as e:
            logger.error(f"Failed to fetch submissions: {str(e)}")
            raise Exception(f"Failed to fetch submissions: {str(e)}")
    
    async def update_status(self, submission_id: str, status: str):
        """Update submission status"""
        try:
            from bson.objectid import ObjectId
            result = await self.collection.update_one(
                {"_id": ObjectId(submission_id)},
                {"$set": {"status": status}}
            )
            return result.modified_count > 0
        except Exception as e:
            logger.error(f"Failed to update status: {str(e)}")
            raise Exception(f"Failed to update status: {str(e)}")
