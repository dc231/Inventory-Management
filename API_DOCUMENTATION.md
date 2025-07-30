# 📦 Inventory Management System - API Documentation

This document provides a complete reference for all API endpoints available in the backend server of the Inventory Management System.

## 🌐 Base URL

```
http://localhost:8080/api
```

## 🔐 1. Authentication Endpoints

Authentication routes allow users to register and log in. These endpoints **do not require** an authentication token.

### ▶️ POST `/auth/register`

Create a new user account.

#### 📝 Request Body

```json
{
  "username": "string",
  "password": "string"
}
```

| Parameter | Type   | Description            | Required |
|-----------|--------|------------------------|----------|
| username  | string | The desired username   | Yes      |
| password  | string | The desired password   | Yes      |

#### ✅ Responses

- **201 Created**
  ```json
  {
    "msg": "User registered successfully"
  }
  ```

- **409 Conflict**
  ```json
  {
    "msg": "User already exists"
  }
  ```
  ![register_user](images\register_user.png)


### ▶️ POST `/auth/login`

Authenticate a user and receive a JSON Web Token (JWT) for accessing protected routes.

#### 📝 Request Body

```json
{
  "username": "string",
  "password": "string"
}
```
![login_user](images\login_user.png)

#### ✅ Responses

- **200 OK**
  ```json
  {
    "access_token": "your_jwt_token_here"
  }
  ```

- **400 Bad Request**
  ```json
  {
    "msg": "Invalid credentials"
  }
  ```

## 📦 2. Product Endpoints

These routes are **protected** and require a valid JWT.

**Authorization Header Format**:
```
Authorization: Bearer <your_access_token>
```

### ▶️ POST `/products`

Add a new product to the inventory.

#### 📝 Request Body

```json
{
  "name": "string",
  "type": "string",
  "sku": "string",
  "description": "string",
  "image_url": "string",
  "price": "number",
  "quantity": "integer"
}
```

#### ✅ Responses

- **201 Created**
  ```json
  {
    "msg": "Product added successfully",
    "product_id": "60d5f2f5e7b3c2a4e8d3e8f1"
  }
  ```
![product_add](images\product_add.png)

- **401 Unauthorized** – No valid token provided.

### ▶️ PUT `/products/{id}/quantity`

Update the quantity of a specific product.

#### 📝 Request Body

```json
{
  "quantity": "integer"
}
```

#### ✅ Responses

- **200 OK**
  ```json
  {
    "_id": "60d5f2f5e7b3c2a4e8d3e8f1",
    "name": "Phone",
    "type": "Electronics",
    "sku": "PHN-001",
    "quantity": 15,
    "price": 999.99
    // ... other fields
  }
  ```

- **404 Not Found** – Product not found.

- **401 Unauthorized** – No valid token provided.

![quantity_update](images\quantity_update.png)

### ▶️ GET `/products`

Retrieve a paginated list of all products.

#### 🔍 Query Parameters

- `page` *(optional)* – Page number (default: 1)
- `limit` *(optional)* – Items per page (default: 10)

**Example**:  
```
GET /api/products?page=2&limit=5
```

#### ✅ Responses

- **200 OK**
  ```json
  [
    {
      "_id": "60d5f2f5e7b3c2a4e8d3e8f1",
      "name": "Phone",
      "quantity": 15
    },
    {
      "_id": "60d5f3a9e7b3c2a4e8d3e8f2",
      "name": "Laptop",
      "quantity": 8
    }
  ]
  ```

- **401 Unauthorized** – No valid token provided.

![get_products](images\get_products.png)

## 📌 Notes

- All protected routes require a valid JWT in the header.
- Passwords must meet your security criteria.
- Product `id` must be a valid MongoDB ObjectId if using MongoDB.

## 🛠️ Built With

- Node.js
- Express.js
- MongoDB
- JWT Authentication

## 👤 Author

Dheeraj Chaudhary  
🔗 [GitHub Profile](https://github.com/your-username)
