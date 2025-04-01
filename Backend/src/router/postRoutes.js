const express = require("express");
const Post = require("../models/PostSchema");
const upload = require("../middleware/upload");
const postRouter = express.Router();

postRouter.post("/create", upload.single("photo"), async (req, res) => {
  try {
    const { title, author, tags, emoji } = req.body;
    const newPost = new Post({
      title,
      author,
      tags: JSON.parse(tags),
      emoji,
      photo: req.file ? req.file.path : undefined,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to create the post", error: error.message });
  }
});

postRouter.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch posts", error: error.message });
  }
});

module.exports = postRouter;
