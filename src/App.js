import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import AdminLogin from "./pages/AdminLogin";
import Header from "./componant/Header";
import AdminSignup from "./pages/AdminSignup";
import ADashboard from "./pages/ADashboard";
import AdminAddPost from "./pages/AdminAddPost";
import AdminAddBlog from "./pages/AdminAddBlog";
import Adminview from "./pages/Adminview";


function App() {
  return (
    <>
   <div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        
        <Route path="/admin-signup" element={<AdminSignup />} />
        
        <Route path="/adashboard" element={<ADashboard />} />
        <Route path="/adminadd-post" element={<AdminAddPost />} />
        <Route path="/adminadd-blog" element={<AdminAddBlog />} />
        
        <Route path="/adminview" element={<Adminview />} />
      </Routes>
      </div>
    </>
  );
}


 


export default App;
