import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Button from './Button';

function Feature2() {
  return (
    <>
      <div className='relative '>
        <h1 className='absolute top-0 left-0 ml-0 bg-blue-400 text-white px-6 py-2 z-10'>RECOMMENDED</h1>
        <div className='relative border border-gray-300 p-6 flex flex-col items-center mt-10'>
          <h3 className='font-sans font-medium text-base text-blue-100 mb-2 ml-1'>Premium Pack</h3>
          <h1>$29.99/per mo.</h1>

          <ul className='mt-6 ml-6 flex flex-col items-center space-y-2'>
            <li><FaCheckCircle className='text-teal-500 mb-4' /></li>
            <li><FaCheckCircle className='text-teal-500 mb-4' /></li>  
            <li><FaCheckCircle className='text-teal-500 mb-4'/></li>  
            <li><FaCheckCircle className='text-teal-500 mb-4'/></li>  
            <li><MdCancel className='text-gray-300 mb-10'/></li>  
          </ul>
          <Button className='mb-4 mr-6'/>
          <br/>
          <h3 className='font-sans font-normal text-base text-gray-300 mb-4'>30 days free trial</h3>
        </div>
      </div>
    </>
  )
}

export default Feature2;
