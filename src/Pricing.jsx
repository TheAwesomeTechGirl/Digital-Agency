import React from 'react'
import Pricingfeatures from './Pricingfeatures'


function Pricing() {
  return (
    <div className='justify-center items-center mt-10'>
      <div >
        <div className='Pricingtitle justify-center items-center flex flex-col'>
<h3 className='text-teal-500 font-medium text-base font-sans mb-2'>Deal for your business</h3>
<h1 className='text-blue-950 font-bold text-base'>Meet our pricing plan that suit you</h1>

        </div>
        <div>
        <Pricingfeatures/> 
        </div>
       
      </div>
    </div>
  )
}

export default Pricing
