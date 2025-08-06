import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function AdminView() {
  const [activeTab, setActiveTab] = useState("blog");
  const [blogs, setBlogs] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    if (activeTab === "blog") {
      fetchBlogs();
    } else {
      fetchPosts();
    }
  }, [activeTab]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/blogs/get");
      setBlogs(res.data);
    } catch (err) {
      console.error("Failed to fetch blogs", err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/posts/get");
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Are you sure to delete this blog?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/blogs/delete/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleDeletePost = async (id) => {
    if (!window.confirm("Are you sure to delete this post?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/posts/delete/${id}`);
      fetchPosts();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleBlogUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editingBlog.title);
      formData.append("content", editingBlog.content);
      if (editingBlog.image) {
        formData.append("image", editingBlog.image);
      }

      await axios.put(`http://localhost:8000/api/blogs/update/${editingBlog._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEditingBlog(null);
      fetchBlogs();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  const handlePostUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/api/posts/update/${editingPost._id}`, {
        title: editingPost.title,
        content: editingPost.content,
      });
      setEditingPost(null);
      fetchPosts();
    } catch (err) {
      console.error("Post update failed", err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen p-6 bg-gray-100">
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("blog")}
            className={`px-4 py-2 rounded ${activeTab === "blog" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            View Blog
          </button>
          <button
            onClick={() => setActiveTab("post")}
            className={`px-4 py-2 rounded ${activeTab === "post" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            View Post
          </button>
        </div>

        {/* Blog Section */}
        {activeTab === "blog" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="mb-2">{blog.content}</p>
                {blog.image && (
                  <img
                    src={`http://localhost:8000/api/blogs/image/${blog._id}`}
                    alt="Blog"
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                )}
                <div className="flex space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                    onClick={() => setEditingBlog(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded"
                    onClick={() => handleDeleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Post Section */}
        {activeTab === "post" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div key={post._id} className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="mb-2">{post.content}</p>
                <div className="flex space-x-2">
                  <button
                    className="px-3 py-1 bg-yellow-500 text-white rounded"
                    onClick={() => setEditingPost(post)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-600 text-white rounded"
                    onClick={() => handleDeletePost(post._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Edit Modal */}
        {editingBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Blog</h2>
              <input
                type="text"
                value={editingBlog.title}
                onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                className="w-full border p-2 rounded mb-3"
              />
              <textarea
                value={editingBlog.content}
                onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                className="w-full border p-2 rounded mb-3"
              />
              <input
                type="file"
                onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.files[0] })}
                className="w-full border p-2 rounded mb-3"
              />
              <div className="flex justify-end space-x-2">
                <button onClick={handleBlogUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                <button onClick={() => setEditingBlog(null)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* Post Edit Modal */}
        {editingPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded w-full max-w-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Post</h2>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                className="w-full border p-2 rounded mb-3"
              />
              <textarea
                value={editingPost.content}
                onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                className="w-full border p-2 rounded mb-3"
              />
              <div className="flex justify-end space-x-2">
                <button onClick={handlePostUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                <button onClick={() => setEditingPost(null)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
