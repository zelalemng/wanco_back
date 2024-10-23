const express = require('express');
const router = express.Router();
const fileController = require('../controllers/uploadcontrolls');
const { uploadFilesMiddleware } = require('../middleware/upload');

// Route to handle file uploads (POST request)
router.post('/upload/multiple', uploadFilesMiddleware, fileController.uploadFiles);

module.exports = router;
