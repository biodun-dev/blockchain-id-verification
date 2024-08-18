
# Blockchain Identity Verification

## Overview

This project is a blockchain-based identity verification service. It uses Node.js, TypeScript, and MySQL for backend development, with integration into a blockchain network for identity verification. The project includes a Swagger UI for API documentation.

## Project Structure

```plaintext
/project-root
│
├── /src
│   ├── /config
│   │   ├── db.ts
│   │   ├── blockchain.ts
│   │   └── environment.ts
│   ├── /controllers
│   ├── /models
│   ├── /services
│   ├── index.ts
│
├── /swagger
│   ├── swaggerConfig.ts
│   ├── user.yaml
│   └── verification.yaml
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
Setup
Clone the Repository:


git clone https://github.com/yourusername/blockchain-id-verification.git
cd blockchain-id-verification
Install Dependencies:


npm install
Set Up Environment Variables:

Create a .env file in the project root with the following variables:


BLOCKCHAIN_API_KEY=your_blockchain_api_key
BLOCKCHAIN_PRIVATE_KEY=your_private_key_here
BLOCKCHAIN_API_URL=https://mainnet.infura.io/v3/your_infura_project_id
JWT_SECRET=your_jwt_secret_key
Run the Application:


npm run start
The server should now be running on http://localhost:3000.

Access Swagger Documentation:

The API documentation is available at http://localhost:3000/api-docs.

Usage
Register a User:

Endpoint: POST /users/register
Body:
json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
Submit a Verification Request:

Endpoint: POST /verifications
Body:
json
{
  "userId": 1,
  "type": "identity",
  "metadata": "Sample metadata"
}
Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your 
changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

vbnet





