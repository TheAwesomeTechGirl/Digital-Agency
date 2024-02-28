import React from 'react'
import course2 from '../src/images/course2.svg';
import Arrowicon from '../src/images/Vector.svg'


function Blogcourse2() {
  return (
    <div className='  space-y-4 lg:mt-10 lg:mr-10'>
      <img src={course2} alt='course'/>
      <h1 className='text-blue-900  font-bold text-xl '>New banking application has  developed and we expecting good feedback</h1>
      <a href="#" className="flex flex-row items-center font-bold text-base text-blue-500 hover:underline">
      learn more
    <span className="ml-1">
      <img src={Arrowicon} alt='Arrow' className="h-2 w-2 mt-1 text-blue-500" />
    </span>
  </a>
    </div>
  )
}

export default Blogcourse2
