import { useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function AdminAddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    try {
        await axios.post("http://localhost:8000/api/blogs/post", formData, {

        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Blog added successfully!");
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error adding blog");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen p-6 bg-white">
        <h2 className="text-xl font-semibold mb-4">Add Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Blog Content"
            className="w-full border p-2 rounded h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
            required
          />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
            Submit Blog
          </button>
        </form>
      </div>
    </>
  );
}
