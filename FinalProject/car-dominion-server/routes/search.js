const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Example protected route
router.get('/', auth, (req, res) => {
  res.json({ message: 'Welcome to the protected route, authenticated user!' });
});

module.exports = router;
