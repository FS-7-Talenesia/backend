# Talenesia LMS Backend

# Learning Management System (LMS) Backend

This is the backend component of our Learning Management System (LMS). It serves as the core system that handles user authentication, course management, and student data for our online learning platform.

## Features

- User registration 
- Authentication and authorization.
- Course creation and management.
- Submission file
- Enrollments and student data management.
- RESTful API for seamless integration with the frontend.


## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- MongoDB or your preferred database system
- Dependencies specified in `package.json`

## API documentation
- ***Access Website*** <br/>
[Access to API documentation](https://documenter.getpostman.com/view/23550520/2s9Ye8hvYf)

## How to Run

1. Clone the repository:

   ```bash
   docker pull romiari/fs7_lms_be:latest
   docker run -d -p 8000:8000 romiari/fs7_lms_be

2. Open postman then input this url "http://localhost:8000/"

3. if not using docker, change this url "http://localhost:8000/" to "https://fs-7-talenesia-backend.vercel.app/"


