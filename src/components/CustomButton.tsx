import React from 'react'

interface CustomButtonProps {
    text1: string;
    text2: string;
}

const CustomButton = ({text1, text2}) => {
  return (
    <div className='button-container '>
            <button className=' update-btn border'>{text1}</button>
            <button className='change-btn bg-neutral-600'>{text2}</button>
          </div>
  )
}

export default CustomButton