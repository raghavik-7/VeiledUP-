const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      ref: "User",
      required: [true, "Author is required"],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    photo: {
      type: String,
      default: null, // Assuming the photo is stored as a URL or path to the image
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model("Post", postSchema);
