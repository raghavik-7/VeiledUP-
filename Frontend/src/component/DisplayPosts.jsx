import React, { useState, useEffect } from "react";
import aesthetic from "../Assets/aesthetic.jpg";

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/upload/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1 className="text-2xl font-bold">Posts</h1>
      <div className="grid grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="border border-gray-400 rounded-lg p-4 shadow-lg"
          >
            <img
              src={aesthetic}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.author}</p>
            <div className="text-sm text-gray-600">{post.tags.join(", ")}</div>
            <p>{post.emoji}</p>
            <div className="text-sm text-gray-600">{post.emoji}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayPosts;
