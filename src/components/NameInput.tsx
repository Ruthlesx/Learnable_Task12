import React from 'react'

interface NameInputProps {
    option: string;
}

const NameInput:React.FC<NameInputProps> = ({option}) => {
  return (
    <div className='flex username-container ml-1'>
    <label className='account-label flex text-black'>{option}</label>
    <input className='username-input ' />
  </div>
  )
}

export default NameInput