import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Button from './Button';

function Feature4() {
  return (
   <>
    <div className='border border-gray-300 p-6 flex flex-col items-center '>
  <h3 className='font-sans font-medium text-base text-blue-100 mt-10 mb-2 ml-1'>Ultimate Pack</h3>
  <h1 className='text-blue-950 font-medium text-xl '>$35.99/per mo.</h1>

  <ul className='mt-6 ml-6 flex flex-col items-center space-y-2'>
           <li><FaCheckCircle className='text-teal-500 mb-4' /></li>
            <li><FaCheckCircle className='text-teal-500 mb-4' /></li>  
            <li><FaCheckCircle className='text-teal-500 mb-4'/></li>  
            <li><FaCheckCircle className='text-teal-500 mb-4'/></li>  
            <li><FaCheckCircle className='text-teal-500 mb-10'/></li>  
           
  </ul>
  <Button className='mb-4 mr-6'/>
  <br/>
  <h3 className='font-sans font-normal text-base text-gray-300 mb-4'> 45 days free trial</h3>
</div>

   </>
  )
}

export default Feature4
