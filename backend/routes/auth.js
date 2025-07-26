const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Maps the API endpoints to the controller functions
router.post('/register', register);
router.post('/login', login);

module.exports = router;