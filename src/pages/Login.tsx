import React from 'react'
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"
import { Role } from "../types";
const Login = () => {

    const [username, setUsername] = useState("");
    const [role, setRole] = useState<"admin" | "editor" | "viewer">("admin")  //<Role>("admin");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = () => {
        if (username.trim()) {
            login({ username, role });
            navigate(from);
        }
    };

  return (
    <div className='p-4 '>
        <h1 className=' mb-5 font-mono'>Login</h1>
        <div className='h-40 w-lg p-14 bg-gray-900 border border-indigo-600 bg-teal '>

        
        <input placeholder='Username' value={username} onChange={ (e) => setUsername(e.target.value)} className='p-2 border rounded-xl mr-2' />
        <select value={role} onChange={(e) => setRole(e.target.value as "admin"| "editor" | "viewer")} className='p-2 border rounded-xl' >
            <option className='text-black' value="admin">Admin</option>
            <option className='text-black' value="editor">Editor</option>
            <option className='text-black' value="viewer">Viewer</option>
        </select>
        <button onClick={handleLogin} className='p-2 bg-blue-500 text-white ml-2' disabled={!username.trim()}>Login</button>
        </div>
    </div>
  );
};

export default Login