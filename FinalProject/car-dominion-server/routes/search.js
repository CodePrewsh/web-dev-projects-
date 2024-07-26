const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/', authenticateToken, searchController.createSearch);
router.get('/', authenticateToken, searchController.getUserSearches); // For regular users
router.get('/all', authenticateToken, searchController.getAllSearches); // For admins
router.put('/:id', authenticateToken, searchController.updateSearch);
router.delete('/:id', authenticateToken, searchController.deleteSearch);

module.exports = router;
