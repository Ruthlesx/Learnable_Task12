import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react"



const Navbar = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (!user) return null;
 
  return (
    <nav className="p-4 bg-gray-800 text-white justify-between">
       <div>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/profile" className="mr-4">Profile</Link>
          {user.role === "admin" && <Link to="/settings">Settings</Link>}
       </div>

       <div>
         <span className="mr-4">{user.username} ({user.role})</span>
         <button onClick={handleLogout}>Logout</button>
        </div> 
    </nav>
  )
}

export default Navbar