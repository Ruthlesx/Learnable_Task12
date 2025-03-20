import React from 'react'

const AdminCard = () => {
  return (
    <div className='admin-card-container'>
    <div className=''>
      <div className='user-card h-40 bg-black border p-4'>
        <h2 className='flex flex-start font-bold '>User Management</h2>
        <p className=' flex '>Manage user accounts and permissions</p>

        <button className='w- flex flex-start mt-9 p-3 rounded-sm bg-teal-200 text-black' >Manage Users</button>
      </div>
    </div>

    <div className='user-card w-md bg-white m-4 mt-9 border p-4'>
      <div className='h-40 bg-black border p-4'>
        <h2 className='flex flex-start font-bold '>System Settings</h2>
        <p className=' flex '> Configure System settings</p>

        <button className='w- flex flex-start mt-9 p-3 rounded-sm bg-gray-700 text-black' >System Configuration</button>
      </div>
    </div>

    <div className='user-card w-md bg-white m-4 mt-9 border p-4'>
      <div className='h-40 bg-black border p-4'>
        <h2 className='flex flex-start font-bold '>Security</h2>
        <p className=' flex '>Manage security settings and logs</p>

        <button className='w- flex flex-start mt-9 p-3 rounded-sm bg-lime-200 text-black' >Security Center</button>
      </div>
    </div>
    </div>
  )
}

export default AdminCard