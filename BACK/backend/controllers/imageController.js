const sharp = require("sharp");
const Image = require("../models/Image");

// Upload and resize image
const uploadImage = async (req, res) => {
  try {
    const { buffer, mimetype } = req.file;
    const resizedImageBuffer = await sharp(buffer)
      .resize({ width: 300 }) // Resize to a width of 300px
      .toBuffer();

    const newImage = new Image({
      img: resizedImageBuffer,
      contentType: mimetype,
    });

    await newImage.save();
    res.json({ message: "Image uploaded and resized successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve all images
const getImages = async (req, res) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadImage,
  getImages,
};


