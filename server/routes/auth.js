const express = require('express');

const {
  signup,
  login,
  googleLogin,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  logout
} = require('../controllers/authController');

const protect = require('../middleware/auth');

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Authentication Routes
|--------------------------------------------------------------------------
*/

// Create a new account
router.post('/signup', signup);

// Login with email and password
router.post('/login', login);

// Login with Google
router.post('/google', googleLogin);

// Request password reset
router.post('/forgot-password', forgotPassword);

// Reset password using reset token
router.post('/reset-password/:token', resetPassword);

/*
|--------------------------------------------------------------------------
| Protected Authentication Routes
|--------------------------------------------------------------------------
*/

// Get currently authenticated user
router.get('/me', protect, getCurrentUser);

// Logout
router.post('/logout', logout);

module.exports = router;