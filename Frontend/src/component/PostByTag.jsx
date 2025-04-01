import React, { useState, useEffect } from 'react';
import lovers from "../Assets/couple.jpg";

const PostsByTag = ({ tag }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); // Ensure loading state is set when fetching
      try {
        const response = await fetch(`http://localhost:5000/posts/tags/${tag}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts: ' + response.statusText);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchPosts();
  }, [tag]);

  if (loading) return <div>Loading...</div>;
  if (!posts.length) return <div>No posts found for this tag.</div>;

  return (
    <>
      <h1 className='text-center m-8 text-3xl font-semibold underline'>Posts Related to {tag}</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <div key={post._id} className="border p-4 rounded shadow">
            <img src={lovers} alt={post.title} className="w-full h-48 object-cover mb-2" />
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.author}</p>
            <div className="text-gray-600">{post.tags.join(', ')}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostsByTag;
