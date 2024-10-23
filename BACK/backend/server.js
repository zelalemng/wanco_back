const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/error");
const fileRoutes = require('./routes/upload');
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");

const port = process.env.PORT || 3000;

connectDB();


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/uploads', express.static('uploads'));




app.use("/api/users", require("./routes/users"));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/images', require('./routes/image'));
app.use('/api/categories', require('./routes/categories'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/api/images', (req, res) => {
  res.json(images);
});
// Use routes for file handling
app.use('/api/upload', fileRoutes);


 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
