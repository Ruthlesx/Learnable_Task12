import React from 'react';
import CustomButton from '../components/CustomButton';
import NameInput from '../components/NameInput';


const Profile = () => {
  return (
    <div className='profile-container'>
    <div className='bg-slate-400  '>
    <div className=' bg-white  ' >
        <div className="">
        <h1 className=' p-4 profile-header'>Profile Page</h1>
        <p className='flex flex-start ml-5'> Edit your profile details here.</p>
         </div>
    </div>


      <div>
        <div className='profile-box p-6 '>
          <div className='account-container flex flex-start '>
          <h2 className='account text-black'>Account Information</h2>
          </div>

          <div className='flex flex-row '>

          <NameInput option="FirstName:" />

          <NameInput option="LastName:" />

          </div>

          <div className='detail-container'>

          <div className='flex address-container ml-1 p-2'>
            <label className='account-label flex text-black'>Address:</label>
            <input className='username-input ' />
          </div>

          <div className='others-container'>

          <div className='flex city-container ml-1'>
            <label className='account-label flex text-black'>City:</label>
            <input className='city-input' />
          </div>

          <div className='flex city-container ml-1'>
            <label className='account-label flex text-black'>Country:</label>
            <input className='city-input ' />
          </div>

          <div className='flex city-containe ml-1'>
            <label className='account-label flex text-black'>Postal:</label>
            <input className='city-input ' />
          </div>

          </div>

          </div>

         <CustomButton  text1="Update Profile" text2="Change Password" />
          

        </div>
      </div>

    </div>
    </div>
  )
}

export default Profile