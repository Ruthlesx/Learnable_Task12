import React from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Settings: React.FC = () => {
  return (
    <div className='settings-container bg-stone-950 m-4 p-4 '>

    
    <div className=' settings-header p-2 bg-black'>
        <h1 className=''>Settings Page ( Admins Only) </h1>
        <p>Manage application settings. </p>
    </div>

    <div className='settings-box'>

      <div className='system-settings'>
        <h3>System Settings</h3>
        <p>These settings control global system behaviour. Changes will affect all users </p>

      </div>

      <div className='general-settings-box'>
        <h3>General Settings</h3>

        <div className='general-settings-input'>
       <CustomInput label="System Name" placeholder='User Dashboard' />
       <CustomInput label="Default Language" placeholder="English"/>
      </div>

        <div className='check-box'>
          <input type='checkbox'/>
          <p>Enable Maintenance Mode</p>
        </div>

       <CustomButton text1="Save Changes" text2="Reset to Default" />
      </div>

    </div>



    </div>
  )
}

export default Settings