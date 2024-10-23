const path = require('path');

// Controller for uploading multiple files
exports.uploadFiles = (req, res) => {
  if (!req.files) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  // Response can include the files metadata for frontend
  res.json({ message: 'Files uploaded successfully', files: req.files });
};

// If you want to add additional logic for listing, deleting, etc., add more controller methods here
