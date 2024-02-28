import React from 'react';
import { FaPlus } from "react-icons/fa6";

function Question4() {
  return (
    <>
 <div  className='text-center mx-auto max-w-4xl'>
 <ul className='flex flex-row items-center justify-center border-b whitespace-pre-line text-gray-900 border-gray-400 space-x-14 pb-2'>
        <li className='pr-4 font-medium text-base text-blue-900  '>04.
        <span >Can I upgrade or downgrade my web 
        <br/>
        hosting subscription system?</span>
        </li>
        <li className='pr-4 text-gray-400 font-normal text-base '>The pricing made me a little hesitant at first but I have been ...</li>
        <li><FaPlus className='text-gray-400' /></li>
      </ul>
 </div>
    </>
  );
}

export default Question4;
