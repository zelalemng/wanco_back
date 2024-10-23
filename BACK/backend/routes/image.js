const express = require("express");
const multer = require("multer");
const imageController = require("../controllers/imageController");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024, // Limit file size to 1MB
  },
});

router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/images", imageController.getImages);

module.exports = router;

