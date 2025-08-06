import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../componant/Header";

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/posts/get");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-white shadow rounded p-4">
              {post.image && (
                <img
                  src={`http://localhost:8000/uploads/${post.image}`}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm mt-2">{post.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
