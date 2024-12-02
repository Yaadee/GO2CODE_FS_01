const Post = require("../models/Post");

// Create a new post
const createPost = async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(200).json({success:true, message:'Post are created Successfully. ', data:post})

    } catch (error) {
      if(error.code === 11000){
        res.status(500).json({success:false, message:"Title of a post cannot be the same"})
      }
    }
  };
  

// Get all posts
const getPosts = async (req, res) => {
  try {
    console.log(Post);
    const sortOrder = req.query.order === "reverse" ? -1 : 1;
    const posts = await Post.find().sort({ createdAt: sortOrder });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getPosts };
