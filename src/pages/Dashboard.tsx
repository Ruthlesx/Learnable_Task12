import React from 'react'
import { useAuth } from "../context/AuthContext"

const Dashboard = () => {

    const { user } = useAuth()

  return (
    <>
    <div className=' p-4 bg-black'>
        <h1 className='text-2xl '>Dashboard</h1>
        {user?.role === "admin" && <>
        <h2>Welcome! You are an Admin</h2>
        <p>Admin Controls Here</p></>}

        {user?.role === "editor" && <>
        <h2>Welcome! You are an Editor</h2>
        <p>Control Editor Panel Here </p></>}

        {user?.role === "viewer" && <p>Welcome! Viewer, Viewer Reports Here</p>}
    </div>


    

</>



  )
}

export default Dashboard