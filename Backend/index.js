require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRouter = require("./src/router/AuthRouter");
const postRouter = require("./src/router/postRoutes");
const Post = require("./src/models/PostSchema");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/auth", authRouter);
app.use("/upload", postRouter);

app.get("/posts/tags/:tag", async (req, res) => {
  try {
    const posts = await Post.find({ tags: req.params.tag }); // find posts that contain the tag
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch posts", error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
