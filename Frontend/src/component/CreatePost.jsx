import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSmile } from "@fortawesome/free-solid-svg-icons";
import Dogs from "../Assets/Dogs.jpg";
import { useNavigate } from "react-router-dom";
import Picker from "emoji-picker-react";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    title: "",
    tags: "",
    photo: null,
    chosenEmoji: null,
  });

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const navigate = useNavigate();

  const savedUser = JSON.parse(localStorage.getItem("user"));
  const userName = savedUser?.user?.name;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleFileChange = (event) => {
    setPostData({ ...postData, photo: event.target.files[0] });
  };

  const handleEmojiButtonClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (event, emojiObject) => {
    setPostData({ ...postData, chosenEmoji: emojiObject });
    setShowEmojiPicker(false); // Hide emoji picker after selection
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, tags, photo, chosenEmoji } = postData;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("tags", JSON.stringify(tags.split(",")));
    if (photo) {
      formData.append("photo", photo);
    }
    formData.append("author", userName);

    if (chosenEmoji) {
      formData.append("emoji", chosenEmoji.emoji);
    }

    try {
      const response = await fetch("http://localhost:5000/upload/create", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      console.log("Post created:", await response.json());
      navigate("/main");
      alert("Post created successfully!");
      setPostData({ title: "", tags: "", photo: null, chosenEmoji: null });
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error creating post");
    }
  };

  return (
    <div className=" p-4 bg-white min-w-32 justify-center shadow-xl rounded-lg border border-gray-400">
      <div className="flex items-center space-x-4 mb-4">
        <img src={Dogs} alt="User Avatar" className="w-10 h-10 rounded-full" />
        <span className="font-semibold uppercase">{userName}</span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Write here..."
          value={postData.title}
          onChange={handleInputChange}
          className="w-full border-gray-300 p-2 rounded-md"
        />
        <div className="flex space-x-4 items-center">
          <label className="flex items-center space-x-2 cursor-pointer">
            <FontAwesomeIcon icon={faCamera} />
            <span>Photo or Video</span>
            <input
              type="file"
              name="photo"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags, separated by commas"
            value={postData.tags}
            onChange={handleInputChange}
            className="flex-1 border border-gray-300 p-2 rounded-md"
          />
          <button
            type="button"
            onClick={handleEmojiButtonClick}
            className="p-2 border border-gray-300 rounded-md"
          >
            <FontAwesomeIcon icon={faSmile} />
            <span>Reaction</span>
          </button>
        </div>
        {showEmojiPicker && (
          <div>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
        {postData.chosenEmoji && (
          <div>
            <span>Your Emoji: {postData.chosenEmoji.emoji}</span>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
