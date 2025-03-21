import React from 'react'
import { createContext, useContext, useState } from "react";
import { User, Role } from "../types";


interface AuthContextType {

    user: User | null;
    login: (user: User) => void;
    logout: () => void; 
}


const AuthContext = createContext<AuthContextType | undefined>(undefined); 


export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);

    const login = (user: User) => setUser(user);
    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout}} >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};