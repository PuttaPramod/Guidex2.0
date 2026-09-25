const express = require('express');

const {
  getUserData,
  updateUserData
} = require('../controllers/userDataController');

const protect = require('../middleware/auth');

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Protected User Data Routes
|--------------------------------------------------------------------------
*/

// Get data belonging to the currently authenticated user
router.get('/', protect, getUserData);

// Update data belonging to the currently authenticated user
router.put('/', protect, updateUserData);

module.exports = router;