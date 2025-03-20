import React from 'react'

//Define the props type

interface CustomInputProps {
    label: string;
    placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder}) => {
  return (
    <div className='settings-input '>
    <label>{label}</label>
    <input
    type='text' 
    placeholder={placeholder} />
  </div>
  )
}

export default CustomInput