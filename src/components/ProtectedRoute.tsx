 import React from 'react';
 import { Navigate, useLocation } from "react-router-dom";
 import { useAuth } from "../context/AuthContext";
 import { Role } from "../types";


 interface ProtectedRouteProps {
   
    children: JSX.Element;
    requiredRole?: Role; 
 }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole}) => {

    const { user } = useAuth();
    const location = useLocation();
    
    // Redirect to login if user is not authenticated
    if (!user) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Redirect to dashboard if user does not have the required role
    if (requiredRole && user.role !== requiredRole) {
         return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }


    // Render the children component if user is authenticated and has the required role
    return children;
 };


export default ProtectedRoute