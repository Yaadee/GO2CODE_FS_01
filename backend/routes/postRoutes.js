const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePosts,
  deletePosts,
} = require("../controllers/postController");

router.route('/').get(getPosts).post(createPost)
module.exports = router;
