import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react"



const Navbar = () => {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!user) return null;
 
  return (
    <nav className="navbar p-4 w-screen bg-teal-200 text-white justify-between">
       <div>
          <Link to="/dashboard" className="mr-4">Dashboard</Link>
          <Link to="/profile" className="mr-4">Profile</Link>
          {user.role === "admin" && <Link to="/settings">Settings</Link>}
       </div>

       <div>
         <span className="mr-4 font-mono text-black">{user.username} ({user.role})</span>
         <button className="font-mono bg-stone-400 p-1 w- text-black" onClick={handleLogout}>Logout</button>
        </div> 
    </nav>
  )
}

export default Navbar