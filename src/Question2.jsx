import React from 'react';
import { FaMinus } from "react-icons/fa6";

function Question2() {
  return (
    <>
    <div className='text-center mx-auto max-w-4xl'>
    <ul className='flex flex-row items-center justify-center border-b text-gray-900 border-gray-900 space-x-2 pb-2'>
        <li className='pr-4 font-medium text-base text-blue-900'>02. What are some tips when choosing a name?</li>
        <li className='pr-4 text-gray-400 font-normal text-base'>We make it easy to move to CometNine. Simply contact us and we'll
        <br/>
         move your hosting account from any other provider, regardless of
         <br/>
          the control panel. If at anytime your website is down for more than
          <br/>
           0.1% result with proper investigation experiments.</li>
        <li><FaMinus className='text-gray-400' /></li>
      </ul>
    </div>
      
    </>
  );
}

export default Question2;
