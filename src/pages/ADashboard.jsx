import { Link, useNavigate } from "react-router-dom";
import { LogOut, FilePlus, PenLine } from "lucide-react";
import AdminNavbar from "./AdminNavbar";

export default function ADashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>
      </div>
    </>
  );
}
