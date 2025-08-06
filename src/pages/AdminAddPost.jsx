import { useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function AdminAddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/posts/post", { title, content });
      alert("Post added successfully!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to add post.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Add Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Post Content"
            className="w-full border p-2 rounded h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit Post
          </button>
        </form>
      </div>
    </>
  );
}
