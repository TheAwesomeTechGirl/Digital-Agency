import React from 'react'
import course1 from '../src/images/course1.svg';
import Arrowicon from '../src/images/Vector.svg'


function Blogcourse1() {
  return (
    <div className='space-y-4 m-10 lg:ml-28  lg:mt-48'>
      <img src={course1} alt='course'/>
      <h1 className='text-blue-900  font-bold text-xl '>Introducing our newest team with 
      <br/>
      great experience</h1>
      <p className='text-gray-800 font-normal text-base'>Brian Halligan knows that you need more than 
      a great product to have a great brand.</p>
      <a href="#" className="flex flex-row items-center font-bold text-base text-blue-500 hover:underline">
      learn more
    <span className="ml-1">
      <img src={Arrowicon} alt='Arrow' className="h-2 w-2 mt-1 text-blue-500" />
    </span>
  </a>
    </div>
  )
}

export default Blogcourse1
