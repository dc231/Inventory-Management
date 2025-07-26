// Load the environment variables from the .env file
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

// Initialize the express app
const app = express();

// Connect to the database
connectDB();

// This is a middleware that allows the app to understand incoming JSON data
app.use(express.json());

// I'm telling the app to use my route files for any requests to these paths
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));

// I'm setting the port for the server, defaulting to 8080
const PORT = process.env.PORT || 8080;

// This command starts the server and listens for requests on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));