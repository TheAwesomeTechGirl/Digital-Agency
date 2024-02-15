import React from 'react';
import Pricinglistitems from './Pricinglistitems';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';
import Feature4 from './Feature4';



function Pricingfeatures() {
  return (
    <div className='justify-start items-start'>
      <div className='flex flex-col lg:flex-row mt-16 ml-0 space-y-2 lg:space-x-2 '>
       
        
        <Pricinglistitems/>
          <Feature1 className='w-1/3 mb-4  md:mb-0' />
          <Feature2 className='w-1/3 mb-4 md:mb-0' /> 
          <Feature3 className='w-1/3 mb-4  md:mb-0' />
          <Feature4 className='w-1/3 mb-4  md:mb-0' /> 
          
      </div>
    </div>
  );
}

export default Pricingfeatures;
