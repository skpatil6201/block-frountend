import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../componant/Header";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/blogs/get");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Optional: useEffect(() => console.log("blog", blogs), [blogs]);

  const bufferToBase64 = (buffer) => {
  const binary = Array.from(new Uint8Array(buffer.data), byte =>
    String.fromCharCode(byte)
  ).join('');
  return btoa(binary);
};


  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white shadow rounded p-4">
              {blog.image?.data && (
                <img
                  src={`data:${blog.image.contentType};base64,${bufferToBase64(
                    blog.image.data
                  )}`}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm mt-2">{blog.content.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
