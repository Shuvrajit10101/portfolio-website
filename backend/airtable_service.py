from pyairtable import Api
import os
from datetime import datetime
import logging
from pathlib import Path
from dotenv import load_dotenv

logger = logging.getLogger(__name__)

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

class AirtableService:
    def __init__(self):
        self.api_key = os.environ.get('AIRTABLE_API_KEY')
        self.base_id = os.environ.get('AIRTABLE_BASE_ID')
        self.table_name = os.environ.get('AIRTABLE_TABLE_NAME', 'Contact Submissions')
        
        if not self.api_key or not self.base_id:
            logger.warning("Airtable credentials not configured")
            self.api = None
            self.table = None
        else:
            try:
                self.api = Api(self.api_key)
                self.table = self.api.table(self.base_id, self.table_name)
                logger.info("Airtable service initialized successfully")
            except Exception as e:
                logger.error(f"Failed to initialize Airtable: {str(e)}")
                self.api = None
                self.table = None
    
    def is_configured(self):
        """Check if Airtable is properly configured"""
        return self.table is not None
    
    def create_contact_submission(self, name: str, email: str, message: str, subject: str = None):
        """Create a new contact submission in Airtable"""
        if not self.is_configured():
            raise Exception("Airtable is not properly configured. Please check your credentials.")
        
        try:
            record_data = {
                "Name": name,
                "Email": email,
                "Message": message,
                "Timestamp": datetime.utcnow().isoformat(),
                "Status": "New"
            }
            
            if subject:
                record_data["Subject"] = subject
            
            record = self.table.create(record_data)
            logger.info(f"Contact submission created: {record['id']}")
            return record
        except Exception as e:
            logger.error(f"Failed to create contact submission: {str(e)}")
            raise Exception(f"Failed to save contact submission: {str(e)}")
    
    def get_all_submissions(self, max_records=1000):
        """Get all contact submissions (for admin purposes)"""
        if not self.is_configured():
            raise Exception("Airtable is not properly configured")
        
        try:
            # Use max_records to prevent performance issues with large datasets
            records = self.table.all(max_records=max_records, sort=['-Timestamp'])
            return records
        except Exception as e:
            logger.error(f"Failed to fetch submissions: {str(e)}")
            raise Exception(f"Failed to fetch submissions: {str(e)}")

# Singleton instance
airtable_service = AirtableService()
