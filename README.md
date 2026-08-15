# 🚀 AWS Serverless Student Registration Web App

A fully functional serverless web application built using **Amazon S3, API Gateway, AWS Lambda, and Amazon DynamoDB**.

The application allows users to submit student registration details through a web form. The request is processed through an API Gateway HTTP endpoint, handled by a Python Lambda function, and stored in DynamoDB with an automatically generated unique Student ID.

---

## 🌐 Live Demo

**Live Application:**
http://boomesh-serverless-webapp-2026.s3-website.ap-south-1.amazonaws.com/

> The application is hosted as a static website using Amazon S3.

---

## 📌 Project Overview

This project demonstrates how to build a complete **serverless web application on AWS without managing traditional servers**.

The frontend is hosted on Amazon S3 and communicates with an HTTP API through Amazon API Gateway.

AWS Lambda processes the incoming request and stores the student information in Amazon DynamoDB.

### Application Flow

```text
User
 │
 ▼
Amazon S3
Static Website
 │
 │ POST /students
 ▼
Amazon API Gateway
 │
 ▼
AWS Lambda
Python Backend
 │
 ▼
Amazon DynamoDB
Students Table
```

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │        USER         │
                    │                     │
                    │  Student Web Form   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     Amazon S3       │
                    │                     │
                    │  Static Web Hosting │
                    │  HTML / CSS / JS    │
                    └──────────┬──────────┘
                               │
                         HTTP POST
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Amazon API        │
                    │      Gateway        │
                    │                     │
                    │ POST /students      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │     AWS Lambda      │
                    │                     │
                    │  Python Backend     │
                    │  Request Processing │
                    └──────────┬──────────┘
                               │
                         PutItem()
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Amazon           │
                    │     DynamoDB        │
                    │                     │
                    │  Students Table     │
                    └─────────────────────┘
```

---

## ☁️ AWS Services Used

| AWS Service             | Purpose                                    |
|--------------------------|---------------------------------------------|
| **Amazon S3**            | Hosts the static frontend                   |
| **Amazon API Gateway**   | Provides the HTTP API endpoint              |
| **AWS Lambda**           | Processes registration requests             |
| **Amazon DynamoDB**      | Stores student registration data            |
| **AWS IAM**              | Controls permissions between AWS services   |

---

## ✨ Features

- ✅ Serverless architecture
- ✅ Static website hosting using Amazon S3
- ✅ Student registration form
- ✅ API Gateway HTTP API
- ✅ Python AWS Lambda backend
- ✅ DynamoDB database integration
- ✅ Automatic unique Student ID generation
- ✅ CORS configuration for browser-based API requests
- ✅ No traditional server required
- ✅ Scalable AWS architecture
- ✅ GitHub-based project management

---

## 📝 Student Registration

Users can submit:

- Name
- Email
- College
- Course

**Example input:**

```text
Name     : Boomesh
Email    : boomesh@gmail.com
College  : Rathinam Technical Campus
Course   : B.Tech IT
```

After successful registration, Lambda generates a unique Student ID.

```text
Student ID:
fb4e6001-9e4c-432e-bca2-4ad252a6d0e7
```

---

## 🔌 API

### Endpoint

```text
POST /students
```

### API URL

```text
https://81ismc1hs9.execute-api.ap-south-1.amazonaws.com/students
```

### Request

```json
{
  "name": "Boomesh",
  "email": "boomesh@gmail.com",
  "college": "Rathinam Technical Campus",
  "course": "B.Tech IT"
}
```

### Response

```json
{
  "message": "Student registered successfully",
  "studentId": "generated-unique-id"
}
```

---

## 🗄️ DynamoDB Structure

### Table

```text
Students
```

### Attributes

| Attribute   | Type   | Description               |
|-------------|--------|----------------------------|
| `studentId` | String | Unique student identifier |
| `name`      | String | Student name               |
| `email`     | String | Student email               |
| `college`   | String | College name                |
| `course`    | String | Course name                 |

**Example DynamoDB item:**

```json
{
  "studentId": "fb4e6001-9e4c-432e-bca2-4ad252a6d0e7",
  "name": "Boomesh",
  "email": "boomesh@gmail.com",
  "college": "Rathinam Technical Campus",
  "course": "B.Tech IT"
}
```

---

## ⚙️ Lambda Backend

The Lambda function is written in **Python**. Its main responsibilities are:

1. Receive the API Gateway request
2. Parse the JSON request body
3. Generate a unique Student ID
4. Create a DynamoDB item
5. Store the student information
6. Return a JSON response to the frontend

### Workflow

```text
API Request
     ↓
Parse JSON
     ↓
Generate UUID
     ↓
Create DynamoDB Item
     ↓
PutItem()
     ↓
Return Response
```

---

## 🌍 CORS Configuration

CORS is configured in API Gateway to allow the S3-hosted frontend to communicate with the API.

```text
Allowed Origin   : *
Allowed Headers  : content-type
Allowed Methods  : POST, OPTIONS
Credentials      : Disabled
```

---

## 📂 Project Structure

```text
aws-serverless-webapp/
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

## 💻 Frontend

Built using **HTML5, CSS3, and JavaScript**. JavaScript uses the `fetch()` API to send registration data to API Gateway.

```javascript
fetch(API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(studentData)
});
```

---

## 🔄 Complete Request Flow

When a user clicks **Register**:

```text
1. User enters student details
2. JavaScript collects form data
3. fetch() sends POST request
4. API Gateway receives request
5. API Gateway invokes Lambda
6. Lambda parses request
7. Lambda generates Student ID
8. Lambda writes data to DynamoDB
9. DynamoDB stores the record
10. Lambda returns success response
11. API Gateway returns response
12. Website displays Student ID
```

---

## 🧪 Testing

The application was tested at multiple levels:

| Level                  | Method                                              |
|-------------------------|------------------------------------------------------|
| **Lambda**              | Tested directly using a JSON event                   |
| **API Gateway**         | Tested using an HTTP POST request                    |
| **DynamoDB**            | Verified successful writes in the `Students` table   |
| **End-to-End**          | Full workflow tested from the live S3 website        |

```text
S3 Website → API Gateway → Lambda → DynamoDB
```

The registration was successfully stored in DynamoDB.

---

## 📸 Screenshots

Add project screenshots to a `screenshots/` folder in the repository.

| Screenshot            | Markdown                                                |
|-------------------------|----------------------------------------------------------|
| S3 Static Website       | `![S3 Website](screenshots/s3-website.png)`               |
| API Gateway              | `![API Gateway](screenshots/api-gateway.png)`             |
| Lambda Function          | `![Lambda](screenshots/lambda.png)`                        |
| DynamoDB                 | `![DynamoDB](screenshots/dynamodb.png)`                    |
| Successful Registration  | `![Successful Registration](screenshots/success.png)`     |

---

## 🛠️ Technologies Used

**Frontend:** HTML5, CSS3, JavaScript
**Backend:** Python, AWS Lambda
**Cloud:** Amazon S3, Amazon API Gateway, Amazon DynamoDB, AWS IAM
**Tools:** Git, GitHub, AWS Management Console

---

## 🎯 Learning Outcomes

Through this project, practical experience was gained with:

- Serverless architecture
- Amazon S3 static website hosting
- API Gateway HTTP APIs
- AWS Lambda functions
- Python serverless backend development
- DynamoDB NoSQL database
- IAM permissions
- CORS configuration
- REST-style API communication
- JavaScript `fetch()` API
- AWS service integration
- Cloud-based application deployment
- Git and GitHub project management

---

## 🚀 Future Enhancements

- [ ] GET API to retrieve registered students
- [ ] Display registered students on the website
- [ ] Search students by Student ID
- [ ] Update student information
- [ ] Delete student records
- [ ] Input validation
- [ ] Authentication using Amazon Cognito
- [ ] Custom domain
- [ ] HTTPS using CloudFront
- [ ] CloudWatch monitoring and logging
- [ ] Infrastructure as Code using AWS CloudFormation
- [ ] CI/CD deployment using GitHub Actions

---

## 🔐 Security Considerations

This project is intended as a learning and demonstration project.

For production deployment, additional security measures should be implemented:

- API authentication and authorization (Amazon Cognito)
- Restrictive CORS configuration
- Input validation
- Rate limiting
- CloudWatch monitoring
- Least-privilege IAM policies
- HTTPS through CloudFront
- Protection of sensitive user information

> ⚠️ **Never commit AWS access keys, secret keys, passwords, or `.env` files to GitHub.**

---

## 💰 Cost Consideration

This project uses AWS serverless services designed to support low-cost usage. AWS usage should be monitored through the AWS Billing dashboard.

> Always check the current AWS Free Tier eligibility and pricing applicable to your account before deploying production workloads.

---

## 👨‍💻 Author

**R Boomesh**
B.Tech Information Technology Student
Rathinam Technical Campus, Coimbatore

**Skills Demonstrated:** AWS Cloud · Serverless Architecture · Python · JavaScript · DynamoDB · API Development · Git & GitHub · Cloud Computing

---

## ⭐ Project Highlights

```text
Amazon S3 + API Gateway + AWS Lambda + DynamoDB
        =
Fully Serverless Web Application
```

Built as a hands-on AWS cloud project to understand how multiple managed AWS services can be integrated into a real-world application.
