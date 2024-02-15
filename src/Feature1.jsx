import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Button from './Button';

function Feature1() {
  return (
   <>
    <div className='border border-gray-300 p-6  flex flex-col items-center '>
  <h3 className='font-sans font-medium text-base text-blue-100 mt-10 mb-2 ml-1'>Starter Pack</h3>
  <h1 >$18.99/per mo.</h1>

  <ul className='mt-6 ml-6 flex flex-col items-center space-y-2'>
    <li><FaCheckCircle className='text-teal-500 mb-4' /></li>
    <li><FaCheckCircle className='text-teal-500 mb-4' /></li>  
    <li><MdCancel className='text-gray-300 mb-4'/></li>  
    <li><MdCancel className='text-gray-300 mb-4'/></li>  
    <li><MdCancel className='text-gray-300 mb-10'/></li>  
  </ul>
  <Button className='mb-4 mr-6'/>
  <br/>
  <h3 className='font-sans font-normal text-base text-gray-300 mb-4'> 15 days free trial</h3>
</div>

   </>
  )
}

export default Feature1
