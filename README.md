# Talenesia LMS Backend

# Learning Management System (LMS) Backend

This is the backend component of our Learning Management System (LMS). It serves as the core system that handles user authentication, course management, and student data for our online learning platform.

## Table of Contents
- [Features](#features)
- [Code Architecture](#code-architecture)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [API Documentation](#api-documentation)
- [How to Install](#how-to-install)
- [How to Run](#how-to-run)

## Features

- User registration 
- Authentication and authorization.
- Course creation and management.
- Submission file
- Enrollments and student data management.
- RESTful API for seamless integration with the frontend.

## Code Architecture
In this project, we use the repository pattern as the code architecture

  - **`controllers/`:**
    This directory typically contains the controllers, which handle the incoming requests, process the input, interact with the services, and return the response.

  - **`models/`:**
    This directory usually contains the data models, which define the structure of the data that the application works with.

  - **`repositories/`:**
    This directory is where the repository pattern comes into play. The repositories abstract the data access logic from the controllers and services. They contain methods for retrieving and persisting data.

  - **`services/`:**
    This directory typically contains the business logic of the application. Services interact with repositories to perform data operations and provide an abstraction layer for the controllers.

## Tech Stack
The following technologies are used in the project:     
- [express](https://expressjs.com/) - is a back end web application framework for building RESTful APIs with Node.js
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) - is a JavaScript library that provides bcrypt hashing functions for Node.js.
- [cors](https://www.npmjs.com/package/cors) - is a middleware for Node.js web servers that simplifies the process of handling CORS in your applications
- [dotenv](https://www.npmjs.com/package/dotenv) - is a npm package for Node.js applications that helps manage environment variables in a project by loading them from a file named .env.
- [firebase](https://www.npmjs.com/package/firebase) - a variety of tools and services that help developers with features like authentication, real-time databases, cloud functions, hosting, and more. but in this project only uses firebase storage
- [joi](https://www.npmjs.com/package/joi) - a schema description language and data validator for Javascript
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - is a npm library for Node.js that allows you to generate and verify JSON Web Tokens (JWTs).
- [moment](https://www.npmjs.com/package/moment) - a JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [mongoose](https://www.npmjs.com/package/mongoose) -  is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).
- [multer](https://www.npmjs.com/package/multer) -  is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
- [nodemailer](https://www.npmjs.com/package/nodemailer) - is an npm module for Node.js that allows you to send emails from your Node.js applications
- [randombytes](https://www.npmjs.com/package/randombytes) - a simple and reliable way to generate random data that is suitable for cryptographic purposes

## Available Scripts
This is the list of available scripts that you can run in the project directory:
```
npm start
npm run seed:user
```

## Project Structure
```
backend/
├── app/
│   ├── controllers/
│   │   ├── userCtrl.js
│   │   └── index.js
│   ├── models/
│   │   └── userModel.js
│   ├── repositories/
│   │   └── userRepo.js
│   └── services/
│       └── userSvc.js
├── config/
│   ├── database.js
│   └── routes.js
├── package.json
└── index.json
```
## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js
- MongoDB or your preferred database system
- Dependencies specified in `package.json`

## API Documentation
- ***Access Website*** <br/>
[Access to API documentation](https://documenter.getpostman.com/view/23550520/2s9Ye8hvYf)

## How to Install

- ***User Admin*** <br/>
```
username: admin
Password: admin2023

username: kane
Password: adminkane
```

1. Clone the repository:

   ```bash
   git clone https://github.com/FS-7-Talenesia/backend
   ```

2. cd or open to the cloned repository folder 

3. run npm install and npm run seed:user

4. Open postman then input this url "http://localhost:8000/"

5. if not run locall, change this url "http://localhost:8000/" to "https://fs-7-talenesia-backend.vercel.app/"

6. next run the login endpoint to get the token


## How to Run

- ***User Admin*** <br/>
```
username: admin
Password: admin2023

username: kane
Password: adminkane
```

1. Pull image from dockerhub:

   ```bash
   docker pull romiari/fs7_lms_be:latest
   docker run -d -p 8000:8000 romiari/fs7_lms_be

2. Open postman then input this url "http://localhost:8000/"

3. if not using docker, change this url "http://localhost:8000/" to "https://fs-7-talenesia-backend.vercel.app/"

4. next run the login endpoint to get the token


