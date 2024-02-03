import React from 'react';
import Feature1 from './Feature1';

function Pricingfeatures() {
  return (
    <div className='flex justify-start items-start mt-24 ml-48'>
    
      <ul className='text-gray-800 font-medium text-base'>
        <li className='mb-4'>Full Access Library</li>
        <li className='mb-4'>Multiple user</li>
        <li className='mb-4'>Refund Policy</li>
        <li className='mb-4'>Google Analytics</li>
        <li className='mb-4'>24/7 support</li>
      </ul>
      <Feature1 className="mr-16" />
    </div>
  );
}

export default Pricingfeatures;
