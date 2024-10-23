const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

const { protectAdmin, verifyToken } = require("../middleware/auth");
// Get all categories
router.get('/', categoryController.getCategories);

// Get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Create a new category
router.post('/', categoryController.createCategory);

// Update an existing category
router.put('/:id', categoryController.updateCategory);

// Delete a category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
