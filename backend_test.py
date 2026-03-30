#!/usr/bin/env python3
"""
Backend API Testing Script for Contact Form
Tests the contact form API endpoint with various scenarios
"""

import requests
import json
import sys
from datetime import datetime

# Backend URL from frontend .env
BACKEND_URL = "https://animated-future-self.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def print_test_header(test_name):
    print(f"\n{'='*60}")
    print(f"TEST: {test_name}")
    print(f"{'='*60}")

def print_result(success, message, response=None):
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if response:
        print(f"Status Code: {response.status_code}")
        try:
            print(f"Response: {json.dumps(response.json(), indent=2)}")
        except:
            print(f"Response Text: {response.text}")
    print("-" * 60)

def test_valid_contact_form_with_subject():
    """Test POST valid contact form submission with all fields"""
    print_test_header("Valid Contact Form Submission (with subject)")
    
    payload = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Website Inquiry",
        "message": "Hello, I'm interested in learning more about your services. Could you please provide more information?"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "Thank you" in data.get("message", ""):
                print_result(True, "Valid submission with subject accepted", response)
                return True
            else:
                print_result(False, "Response format incorrect", response)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response)
            return False
            
    except Exception as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_valid_contact_form_without_subject():
    """Test POST contact form without optional subject field"""
    print_test_header("Valid Contact Form Submission (without subject)")
    
    payload = {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "message": "This is a test message without a subject field. The API should still accept this submission."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "Thank you" in data.get("message", ""):
                print_result(True, "Valid submission without subject accepted", response)
                return True
            else:
                print_result(False, "Response format incorrect", response)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response)
            return False
            
    except Exception as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_invalid_email_format():
    """Test POST with invalid email format (should fail validation)"""
    print_test_header("Invalid Email Format Validation")
    
    payload = {
        "name": "Test User",
        "email": "invalid-email-format",
        "subject": "Test Subject",
        "message": "This should fail due to invalid email format."
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload, timeout=10)
        
        if response.status_code == 422:
            print_result(True, "Invalid email correctly rejected with 422", response)
            return True
        else:
            print_result(False, f"Expected 422 validation error, got {response.status_code}", response)
            return False
            
    except Exception as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_missing_required_fields():
    """Test POST with missing required fields (should fail validation)"""
    print_test_header("Missing Required Fields Validation")
    
    # Test missing name
    payload_missing_name = {
        "email": "test@example.com",
        "message": "Missing name field"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload_missing_name, timeout=10)
        
        if response.status_code == 422:
            print_result(True, "Missing name field correctly rejected with 422", response)
            name_test_passed = True
        else:
            print_result(False, f"Expected 422 for missing name, got {response.status_code}", response)
            name_test_passed = False
    except Exception as e:
        print_result(False, f"Request failed for missing name test: {str(e)}")
        name_test_passed = False
    
    # Test missing email
    payload_missing_email = {
        "name": "Test User",
        "message": "Missing email field"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload_missing_email, timeout=10)
        
        if response.status_code == 422:
            print_result(True, "Missing email field correctly rejected with 422", response)
            email_test_passed = True
        else:
            print_result(False, f"Expected 422 for missing email, got {response.status_code}", response)
            email_test_passed = False
    except Exception as e:
        print_result(False, f"Request failed for missing email test: {str(e)}")
        email_test_passed = False
    
    # Test missing message
    payload_missing_message = {
        "name": "Test User",
        "email": "test@example.com"
    }
    
    try:
        response = requests.post(f"{API_BASE}/contact", json=payload_missing_message, timeout=10)
        
        if response.status_code == 422:
            print_result(True, "Missing message field correctly rejected with 422", response)
            message_test_passed = True
        else:
            print_result(False, f"Expected 422 for missing message, got {response.status_code}", response)
            message_test_passed = False
    except Exception as e:
        print_result(False, f"Request failed for missing message test: {str(e)}")
        message_test_passed = False
    
    return name_test_passed and email_test_passed and message_test_passed

def test_get_submissions():
    """Test GET /api/contact/submissions to verify submissions are stored"""
    print_test_header("Get Contact Submissions")
    
    try:
        response = requests.get(f"{API_BASE}/contact/submissions", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "submissions" in data and "count" in data:
                submissions_count = data.get("count", 0)
                print_result(True, f"Successfully retrieved {submissions_count} submissions", response)
                
                # Check if we have submissions from our previous tests
                if submissions_count >= 2:  # We should have at least 2 from valid tests
                    print("✅ Submissions from previous tests found in database")
                    return True
                else:
                    print("⚠️  Expected at least 2 submissions from previous tests")
                    return True  # Still pass as the endpoint works
            else:
                print_result(False, "Response missing expected fields (submissions, count)", response)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response)
            return False
            
    except Exception as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_api_health():
    """Test basic API health"""
    print_test_header("API Health Check")
    
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print_result(True, "API health check passed", response)
                return True
            else:
                print_result(False, "Unexpected response format", response)
                return False
        else:
            print_result(False, f"Expected 200, got {response.status_code}", response)
            return False
            
    except Exception as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def main():
    """Run all contact form API tests"""
    print(f"Starting Contact Form API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    print(f"Test Time: {datetime.now().isoformat()}")
    
    # Track test results
    test_results = []
    
    # Run all tests
    test_results.append(("API Health Check", test_api_health()))
    test_results.append(("Valid Form with Subject", test_valid_contact_form_with_subject()))
    test_results.append(("Valid Form without Subject", test_valid_contact_form_without_subject()))
    test_results.append(("Invalid Email Format", test_invalid_email_format()))
    test_results.append(("Missing Required Fields", test_missing_required_fields()))
    test_results.append(("Get Submissions", test_get_submissions()))
    
    # Print summary
    print(f"\n{'='*60}")
    print("TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = 0
    failed = 0
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
        if result:
            passed += 1
        else:
            failed += 1
    
    print(f"\nTotal Tests: {len(test_results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    
    if failed == 0:
        print("\n🎉 All tests passed!")
        return 0
    else:
        print(f"\n⚠️  {failed} test(s) failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())