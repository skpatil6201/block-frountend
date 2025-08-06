import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom"
import Header from "../componant/Header";
export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
 const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post("http://localhost:8000/api/auth/login", form);
      setMessage(res.data.message || "Login successful");
      localStorage.setItem("token", res.data.token);
      console.log("token",res.data.token)
   navigate("/adashboard")
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (<>  
  
  <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-indigo-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Admin Login</h2>

        {message && (
          <div className="bg-red-100 text-red-800 p-2 rounded mb-4 text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              className="absolute top-3 right-3 cursor-pointer text-gray-500"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="text-center mt-4">
  <p className="text-sm text-gray-600">
    Don’t have an account?
    <Link to="/admin-signup" className="text-indigo-600 hover:underline ml-1">
      Sign up
    </Link>
  </p>
</div>

        </form>
      </div>
    </div>
    </>

  );
}
