import React from 'react'
import { useAuth } from "../context/AuthContext"
import AdminCard from '../components/AdminCard'

const Dashboard = () => {

    const { user } = useAuth()

  return (
    <div className="dashboard-container">
    <div className=''>
      <div className=''>
        <h1 className=' flex dashboard-header flex-start text-1xl m-5 '>Dashboard</h1>
      </div>

        {user?.role === "admin" && <>
        <h2 className='p-4'>Welcome! You are an Admin</h2>
        <p>Admin Controls Here</p>

        <AdminCard />
        </>}

        {user?.role === "editor" && <>
        <h2 className='p-4'>Welcome! You are an Editor</h2>
        <p>Control Editor Panel Here </p></>}

        {user?.role === "viewer" && <p className='p-4'>Welcome! Viewer, Viewer Reports Here</p>}
    </div>


    

</div>



  )
}

export default Dashboard