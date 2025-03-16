import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"
import Dashboard from './pages/Dashboard';
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import './App.css'

const App = () => {
  return (
    <AuthProvider>

       
      <Router>
       <Navbar />
        <Routes>
         
        
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
          <Route path="/settings" element={<ProtectedRoute requiredRole="admin"><Settings /></ProtectedRoute>} />
          <Route path="/" element={<Login />} />

          <Route path="*" element={<Navigate to="/login" replace/> }/>



         </Routes>
      </Router>

      </AuthProvider>
    
  )
}


export default App
