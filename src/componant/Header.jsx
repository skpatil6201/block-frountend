import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gray-100  p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/post">Post</Link>
      <Link to="/admin-login">Admin Login</Link>
    </nav>
  );
}

export default Header;
