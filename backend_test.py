#!/usr/bin/env python3
"""
Comprehensive Backend Testing for MongoDB Atlas Integration
Tests all API endpoints, database operations, and data validation
"""

import requests
import json
import time
import sys
from datetime import datetime

# Configuration
BASE_URL = "http://localhost:3000"
API_BASE = f"{BASE_URL}/api"

class BackendTester:
    def __init__(self):
        self.test_results = []
        self.failed_tests = []
        self.passed_tests = []
        
    def log_test(self, test_name, status, message="", response_data=None):
        """Log test results"""
        result = {
            'test': test_name,
            'status': status,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'response_data': response_data
        }
        self.test_results.append(result)
        
        if status == "PASS":
            self.passed_tests.append(test_name)
            print(f"✅ {test_name}: {message}")
        else:
            self.failed_tests.append(test_name)
            print(f"❌ {test_name}: {message}")
    
    def test_database_seeding(self):
        """Test database seeding functionality"""
        print("\n🌱 Testing Database Seeding...")
        
        try:
            response = requests.post(f"{API_BASE}/seed", timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                self.log_test("Database Seeding", "PASS", 
                            f"Database seeded successfully: {data.get('message', '')}")
                return True
            else:
                self.log_test("Database Seeding", "FAIL", 
                            f"Seeding failed with status {response.status_code}: {response.text}")
                return False
                
        except requests.exceptions.RequestException as e:
            self.log_test("Database Seeding", "FAIL", f"Request failed: {str(e)}")
            return False
    
    def test_contact_api(self):
        """Test Contact Form API endpoints"""
        print("\n📧 Testing Contact API...")
        
        # Test POST - Submit contact message
        contact_data = {
            "name": "Sarah Johnson",
            "email": "sarah.johnson@university.edu",
            "subject": "Interested in joining the community",
            "message": "Hi! I'm a computer science student interested in joining your developer community. I have experience with Python and JavaScript and would love to contribute to projects."
        }
        
        try:
            # Test valid submission
            response = requests.post(f"{API_BASE}/contact", 
                                   json=contact_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                self.log_test("Contact POST - Valid Data", "PASS", 
                            f"Contact submitted successfully: {data.get('message', '')}")
            else:
                self.log_test("Contact POST - Valid Data", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test invalid submission (missing fields)
            invalid_data = {"name": "Test User"}
            response = requests.post(f"{API_BASE}/contact", 
                                   json=invalid_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 400:
                self.log_test("Contact POST - Invalid Data", "PASS", 
                            "Correctly rejected invalid data with 400 status")
            else:
                self.log_test("Contact POST - Invalid Data", "FAIL", 
                            f"Should have returned 400, got {response.status_code}")
            
            # Test GET - Fetch contacts
            response = requests.get(f"{API_BASE}/contact")
            
            if response.status_code == 200:
                data = response.json()
                contacts = data.get('contacts', [])
                self.log_test("Contact GET", "PASS", 
                            f"Retrieved {len(contacts)} contact messages")
            else:
                self.log_test("Contact GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Contact API", "FAIL", f"Request failed: {str(e)}")
    
    def test_applications_api(self):
        """Test Community Applications API"""
        print("\n📝 Testing Applications API...")
        
        application_data = {
            "fullName": "Alex Chen",
            "email": "alex.chen@techuniversity.edu",
            "university": "Tech University",
            "academicYear": "Junior",
            "interests": "Full-stack development, machine learning, and open source contributions",
            "experienceLevel": "Intermediate",
            "whyJoin": "I want to collaborate on real-world projects and learn from experienced developers in the community."
        }
        
        try:
            # Test valid application submission
            response = requests.post(f"{API_BASE}/applications", 
                                   json=application_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                self.log_test("Applications POST - Valid Data", "PASS", 
                            f"Application submitted: {data.get('message', '')}")
            else:
                self.log_test("Applications POST - Valid Data", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test duplicate email submission
            response = requests.post(f"{API_BASE}/applications", 
                                   json=application_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 400:
                self.log_test("Applications POST - Duplicate Email", "PASS", 
                            "Correctly rejected duplicate email")
            else:
                self.log_test("Applications POST - Duplicate Email", "FAIL", 
                            f"Should have returned 400, got {response.status_code}")
            
            # Test GET applications
            response = requests.get(f"{API_BASE}/applications")
            
            if response.status_code == 200:
                data = response.json()
                applications = data.get('applications', [])
                self.log_test("Applications GET", "PASS", 
                            f"Retrieved {len(applications)} applications")
            else:
                self.log_test("Applications GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Applications API", "FAIL", f"Request failed: {str(e)}")
    
    def test_events_api(self):
        """Test Events Management API"""
        print("\n🎉 Testing Events API...")
        
        event_data = {
            "title": "React Advanced Patterns Workshop",
            "description": "Deep dive into advanced React patterns including render props, higher-order components, and custom hooks.",
            "date": "April 15, 2024",
            "time": "2:00 PM - 5:00 PM",
            "location": "Innovation Lab, Building A",
            "tags": ["React", "JavaScript", "Workshop"],
            "maxAttendees": 30
        }
        
        try:
            # Test event creation
            response = requests.post(f"{API_BASE}/events", 
                                   json=event_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                event_id = data.get('event', {}).get('_id')
                self.log_test("Events POST - Create Event", "PASS", 
                            f"Event created successfully: {data.get('message', '')}")
                
                # Store event ID for registration test
                self.test_event_id = event_id
            else:
                self.log_test("Events POST - Create Event", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test GET events
            response = requests.get(f"{API_BASE}/events")
            
            if response.status_code == 200:
                data = response.json()
                events = data.get('events', [])
                self.log_test("Events GET", "PASS", 
                            f"Retrieved {len(events)} upcoming events")
            else:
                self.log_test("Events GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Events API", "FAIL", f"Request failed: {str(e)}")
    
    def test_event_registration_api(self):
        """Test Event Registration API"""
        print("\n🎫 Testing Event Registration API...")
        
        registration_data = {
            "eventId": getattr(self, 'test_event_id', 'test-event-123'),
            "eventTitle": "React Advanced Patterns Workshop",
            "userName": "Maria Rodriguez",
            "userEmail": "maria.rodriguez@developer.com"
        }
        
        try:
            # Test event registration
            response = requests.post(f"{API_BASE}/events/register", 
                                   json=registration_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                self.log_test("Event Registration POST", "PASS", 
                            f"Registration successful: {data.get('message', '')}")
            else:
                self.log_test("Event Registration POST", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test duplicate registration
            response = requests.post(f"{API_BASE}/events/register", 
                                   json=registration_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 400:
                self.log_test("Event Registration - Duplicate", "PASS", 
                            "Correctly rejected duplicate registration")
            else:
                self.log_test("Event Registration - Duplicate", "FAIL", 
                            f"Should have returned 400, got {response.status_code}")
            
            # Test GET registrations
            response = requests.get(f"{API_BASE}/events/register")
            
            if response.status_code == 200:
                data = response.json()
                registrations = data.get('registrations', [])
                self.log_test("Event Registration GET", "PASS", 
                            f"Retrieved {len(registrations)} registrations")
            else:
                self.log_test("Event Registration GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Event Registration API", "FAIL", f"Request failed: {str(e)}")
    
    def test_testimonials_api(self):
        """Test Testimonials API"""
        print("\n💬 Testing Testimonials API...")
        
        testimonial_data = {
            "name": "David Kim",
            "role": "Software Engineer",
            "company": "Google",
            "content": "This community helped me transition from a bootcamp graduate to a senior engineer at a top tech company. The mentorship and collaborative projects were invaluable.",
            "rating": 5,
            "image": "/placeholder.svg"
        }
        
        try:
            # Test testimonial submission
            response = requests.post(f"{API_BASE}/testimonials", 
                                   json=testimonial_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                self.log_test("Testimonials POST", "PASS", 
                            f"Testimonial submitted: {data.get('message', '')}")
            else:
                self.log_test("Testimonials POST", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test GET testimonials
            response = requests.get(f"{API_BASE}/testimonials")
            
            if response.status_code == 200:
                data = response.json()
                testimonials = data.get('testimonials', [])
                self.log_test("Testimonials GET", "PASS", 
                            f"Retrieved {len(testimonials)} approved testimonials")
            else:
                self.log_test("Testimonials GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Testimonials API", "FAIL", f"Request failed: {str(e)}")
    
    def test_resources_api(self):
        """Test Resources API"""
        print("\n📚 Testing Resources API...")
        
        resource_data = {
            "title": "Node.js Best Practices Guide",
            "description": "Comprehensive guide covering Node.js security, performance, and architecture best practices",
            "type": "pdf",
            "url": "https://example.com/nodejs-guide.pdf",
            "fileSize": "2.5 MB",
            "tags": ["Node.js", "Backend", "Best Practices"]
        }
        
        try:
            # Test resource creation
            response = requests.post(f"{API_BASE}/resources", 
                                   json=resource_data, 
                                   headers={'Content-Type': 'application/json'})
            
            if response.status_code == 201:
                data = response.json()
                resource_id = data.get('resource', {}).get('_id')
                self.log_test("Resources POST", "PASS", 
                            f"Resource created: {data.get('message', '')}")
                
                # Store resource ID for tracking test
                self.test_resource_id = resource_id
            else:
                self.log_test("Resources POST", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test GET resources
            response = requests.get(f"{API_BASE}/resources")
            
            if response.status_code == 200:
                data = response.json()
                resources = data.get('resources', [])
                self.log_test("Resources GET", "PASS", 
                            f"Retrieved {len(resources)} active resources")
            else:
                self.log_test("Resources GET", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test resource tracking
            if hasattr(self, 'test_resource_id') and self.test_resource_id:
                track_data = {
                    "resourceId": self.test_resource_id,
                    "action": "download"
                }
                
                response = requests.post(f"{API_BASE}/resources/track", 
                                       json=track_data, 
                                       headers={'Content-Type': 'application/json'})
                
                if response.status_code == 200:
                    self.log_test("Resources Tracking", "PASS", 
                                "Download tracked successfully")
                else:
                    self.log_test("Resources Tracking", "FAIL", 
                                f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Resources API", "FAIL", f"Request failed: {str(e)}")
    
    def test_admin_api(self):
        """Test Admin Panel API"""
        print("\n👨‍💼 Testing Admin API...")
        
        try:
            # Test admin dashboard data
            response = requests.get(f"{API_BASE}/admin")
            
            if response.status_code == 200:
                data = response.json()
                summary = data.get('summary', {})
                self.log_test("Admin GET - Dashboard", "PASS", 
                            f"Retrieved admin dashboard data with {len(data)} sections")
            else:
                self.log_test("Admin GET - Dashboard", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
            
            # Test admin stats
            response = requests.get(f"{API_BASE}/admin?type=stats")
            
            if response.status_code == 200:
                data = response.json()
                stats = data.get('stats', {})
                self.log_test("Admin GET - Stats", "PASS", 
                            f"Retrieved statistics: {stats}")
            else:
                self.log_test("Admin GET - Stats", "FAIL", 
                            f"Failed with status {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_test("Admin API", "FAIL", f"Request failed: {str(e)}")
    
    def test_data_validation(self):
        """Test data validation across all endpoints"""
        print("\n🔍 Testing Data Validation...")
        
        validation_tests = [
            {
                "endpoint": f"{API_BASE}/contact",
                "data": {},
                "expected_status": 400,
                "test_name": "Contact - Empty Data"
            },
            {
                "endpoint": f"{API_BASE}/applications",
                "data": {"fullName": "Test"},
                "expected_status": 400,
                "test_name": "Applications - Incomplete Data"
            },
            {
                "endpoint": f"{API_BASE}/events",
                "data": {"title": "Test Event"},
                "expected_status": 400,
                "test_name": "Events - Missing Required Fields"
            },
            {
                "endpoint": f"{API_BASE}/testimonials",
                "data": {"name": "Test"},
                "expected_status": 400,
                "test_name": "Testimonials - Incomplete Data"
            }
        ]
        
        for test in validation_tests:
            try:
                response = requests.post(test["endpoint"], 
                                       json=test["data"], 
                                       headers={'Content-Type': 'application/json'})
                
                if response.status_code == test["expected_status"]:
                    self.log_test(test["test_name"], "PASS", 
                                f"Correctly validated data with {response.status_code} status")
                else:
                    self.log_test(test["test_name"], "FAIL", 
                                f"Expected {test['expected_status']}, got {response.status_code}")
                    
            except requests.exceptions.RequestException as e:
                self.log_test(test["test_name"], "FAIL", f"Request failed: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting Comprehensive Backend Testing for MongoDB Atlas Integration")
        print("=" * 80)
        
        start_time = time.time()
        
        # Run all test suites
        self.test_database_seeding()
        self.test_contact_api()
        self.test_applications_api()
        self.test_events_api()
        self.test_event_registration_api()
        self.test_testimonials_api()
        self.test_resources_api()
        self.test_admin_api()
        self.test_data_validation()
        
        end_time = time.time()
        duration = end_time - start_time
        
        # Print summary
        print("\n" + "=" * 80)
        print("📊 TEST SUMMARY")
        print("=" * 80)
        print(f"Total Tests: {len(self.test_results)}")
        print(f"Passed: {len(self.passed_tests)}")
        print(f"Failed: {len(self.failed_tests)}")
        print(f"Success Rate: {(len(self.passed_tests) / len(self.test_results) * 100):.1f}%")
        print(f"Duration: {duration:.2f} seconds")
        
        if self.failed_tests:
            print(f"\n❌ Failed Tests ({len(self.failed_tests)}):")
            for test in self.failed_tests:
                print(f"  - {test}")
        
        if self.passed_tests:
            print(f"\n✅ Passed Tests ({len(self.passed_tests)}):")
            for test in self.passed_tests:
                print(f"  - {test}")
        
        # Save detailed results
        with open('/app/backend_test_results.json', 'w') as f:
            json.dump({
                'summary': {
                    'total_tests': len(self.test_results),
                    'passed': len(self.passed_tests),
                    'failed': len(self.failed_tests),
                    'success_rate': len(self.passed_tests) / len(self.test_results) * 100,
                    'duration': duration
                },
                'results': self.test_results
            }, f, indent=2)
        
        print(f"\n📄 Detailed results saved to: /app/backend_test_results.json")
        
        return len(self.failed_tests) == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    if success:
        print("\n🎉 All tests passed! MongoDB Atlas integration is working correctly.")
        sys.exit(0)
    else:
        print(f"\n⚠️  {len(tester.failed_tests)} tests failed. Please check the issues above.")
        sys.exit(1)