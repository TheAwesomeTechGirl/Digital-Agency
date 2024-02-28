import React from 'react'
import Arrowicon from '../src/images/Vector.svg'
import company from '../src/images/company.svg'

function Companyitem() {
  return (
    <>
      <div className=' flex flex-col justify-center items-center m-16  lg:m-24'>
      <div className='companytext space-y-6 flex flex-col justify-center items-center'>
  <h1 className='font-semibold text-indigo-950 text-lg leading-6 lg:font-bold lg:text-3xl'>Company who also worked with us</h1>
  <p className='font-normal text-base lg:font-normal lg:text-base leading-9 text-blue-950'>Every email, web page, and social media post makes an impression on your 
  <br/> 
  customers. With our software you can be confident it's the right impression.</p>
  <a href="#" className="flex flex-row items-center font-bold text-base text-blue-500 hover:underline">
    Explore Details
    <span className="ml-1">
      <img src={Arrowicon} alt='Arrow' className="h-2 w-2 mt-1 text-blue-500" />
    </span>
  </a>
</div>

        <div className='companyimage mt-10 w-screen ml-16'>
        <img src={company} alt={company} />
        </div>
      </div>
    </>
  )
}

export default Companyitem
