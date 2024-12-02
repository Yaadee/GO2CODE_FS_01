const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const color = require('colors')
const postRoutes = require("./routes/postRoutes"); 
const connectDB = require('./config/db')
// Load environment variables from .env file

dotenv.config({ path: "config/config.env" });

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

// Define routes
app.use("/api/v1/posts", postRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
