const Post = require("../models/Post");

// Create a new post
const createPost = async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(200).json({success:true, message:'Post are created Successfully. ', data:post})
      console.log(post); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Get all posts
const getPosts = async (req, res) => {
  try {
    console.log(Post); // Debugging step
    const sortOrder = req.query.order === "reverse" ? -1 : 1;
    const posts = await Post.find().sort({ createdAt: sortOrder });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getPosts };
