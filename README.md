# Inventory Management - Backend API

This repository contains the backend code for a simple inventory management application. It's built with Node.js and Express and provides a REST API for managing users and products. The application is fully containerized using Docker for easy setup and deployment.

---
## Features

- **User Authentication**: Secure user registration and login using JWT (JSON Web Tokens).
- **Product Management**: Add new products to the inventory and retrieve a paginated list of all products.
- **Inventory Control**: Update the quantity of any existing product.
- **Containerization**: Fully containerized with Docker and Docker Compose for consistent and easy setup.

---
## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (`jsonwebtoken`)
- **Password Hashing**: `bcryptjs`
- **Containerization**: Docker, Docker Compose

---
## Getting Started

You can run this project either locally or using Docker.

### Running with Docker (Recommended)

This is the easiest way to get the application running.

#### 1. Prerequisites
- Docker Desktop must be installed and running.

#### 2. Setup
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/dc231/Inventory-Management](https://github.com/dc231/Inventory-Management)
    cd Inventory-Management/backend
    ```
2.  **Create an environment file:**
    Create a file named `.env` in the `backend` folder and add your credentials.
    ```env
    # Your MongoDB Atlas connection string
    MONGO_URI=your_mongodb_connection_string

    # A strong, secret key for signing JWTs
    JWT_SECRET=your_super_secret_key
    ```
3.  **Start the application:**
    Run the following command from the `backend` directory.
    ```bash
    docker-compose up -d
    ```
The server will start and be accessible at `http://localhost:8080`.

---
### Local Development Setup

Follow these steps to run the project directly on your machine.

#### 1. Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (A local instance or a cloud-hosted version)

#### 2. Setup
1.  **Clone the repository and install dependencies:**
    ```bash
    git clone [https://github.com/dc231/Inventory-Management](https://github.com/dc231/Inventory-Management)
    cd Inventory-Management/backend
    npm install
    ```
2.  **Create the `.env` file** as described in the Docker setup above.

3.  **Start the server:**
    ```bash
    node server.js
    ```
The server will start on `http://localhost:8080`.

---
## API Documentation

The base URL for all API endpoints is `http://localhost:8080/api`.

### Authentication Endpoints

| Method | Endpoint             | Description              | Auth Required |
| :----- | :------------------- | :----------------------- | :------------ |
| POST   | `/auth/register`     | Register a new user      | No            |
| POST   | `/auth/login`        | Login an existing user   | No            |

### Product Endpoints

All product endpoints require a valid JWT in the `Authorization` header. Format: `Authorization: Bearer <your_access_token>`

| Method | Endpoint                     | Description                  | Auth Required |
| :----- | :--------------------------- | :--------------------------- | :------------ |
| POST   | `/products`                  | Add a new product            | Yes           |
| GET    | `/products`                  | Get a list of all products   | Yes           |
| PUT    | `/products/:id/quantity`     | Update a product's quantity  | Yes           |

---
## Testing

To verify that all endpoints are working correctly, you can use the provided Python test script.

1.  **Install the `requests` library:**
    ```bash
    pip install requests
    ```

2.  **Run the test script:**
    Make sure the server (either local or in Docker) is running, then execute the following command from the project's root directory:
    ```bash
    python test_api.py
    ```
---
## Acknowledgements

AI was used to assist in the creation of the project documentation and the Docker configuration files.