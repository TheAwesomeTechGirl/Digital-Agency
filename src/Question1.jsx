// Question1.js
import React from 'react';
import { FaPlus } from "react-icons/fa6";

function Question1() {
  return (
    <>
      <div className='text-center mx-auto max-w-4xl'>
        <ul className='flex flex-row items-center justify-center border-b text-gray-900 border-gray-400 space-x-14 pb-2'>
          <li className='pr-4 font-medium text-base text-blue-900 '>01. Which domain should I purchase?</li>
          <li className='pr-4 text-gray-400 font-normal text-base'>Get your website tests delivered at the home collect a sample ...</li>
          <li><FaPlus className='text-gray-400' /></li>
        </ul>
      </div>
    </>
  );
}

export default Question1;
