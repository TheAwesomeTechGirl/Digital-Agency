import React from 'react';
import { FaPlus } from "react-icons/fa6";

function Question5() {
  return (
    <>
      <div  className='text-center mx-auto max-w-4xl'>
      <ul className='flex flex-row items-center justify-center border-b text-gray-900 border-gray-400 space-x-10 pb-2'>
        <li className='pr-4 font-medium text-base text-blue-900 '>05. Learn from community on Brandwagon</li>
        <li className='pr-4 text-gray-400 font-normal text-base'>Stop your viewers from getting distracted. Publish videos to ...</li>
        <li><FaPlus className='text-gray-400' /></li>
      </ul>
      </div>
    </>
  );
}

export default Question5;
