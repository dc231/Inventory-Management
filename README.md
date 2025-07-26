# Inventory Management Tool - Backend

This is the backend service for the Inventory Management Tool, built with Node.js, Express, and MongoDB. It provides RESTful APIs to manage products, inventory, and transactions.

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Dotenv  
- Nodemon  

---

## Prerequisites

- Node.js (v14 or above)
- MongoDB (local or Atlas)
- npm (comes with Node.js)

---

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/inventory-management-backend.git
   cd inventory-management-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=8080
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## Testing

This project comes with a Python test script to validate all endpoints.

1. Make sure the server is running locally (`http://localhost:8080`).
2. Run the Python test script:
   ```bash
   python test_api.py
   ```

3. Make sure the `requests` library is installed:
   ```bash
   pip install requests
   ```


---
