import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, FilePlus, PenLine, Menu, X } from "lucide-react";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-gray-100">
      {/* Topbar */}
      <div className="shadow-md px-6 py-4 flex justify-between items-center">
        <Link to="/adashboard">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/adminadd-post"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
          >
            <FilePlus size={18} />
            Add Post
          </Link>

          <Link
            to="/adminadd-blog"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200"
          >
            <PenLine size={18} />
            Add Blog
          </Link>

          <Link
            to="/adminview"
            className="flex items-center gap-2 bg-yellow-900 hover:bg-green-700 text-white px-4 py-2 rounded transition duration-200"
          >
            <PenLine size={18} />
            View
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition duration-200"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-6 pb-4">
          <Link
            to="/adminadd-post"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <FilePlus size={18} />
            Add Post
          </Link>

          <Link
            to="/adminadd-blog"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <PenLine size={18} />
            Add Blog
          </Link>

          <Link
            to="/adminview"
            className="flex items-center gap-2 bg-yellow-900 hover:bg-green-700 text-white px-4 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            <PenLine size={18} />
            View
          </Link>

          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}
