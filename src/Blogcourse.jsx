import React from 'react'
import course3 from '../src/images/course3.svg';
import course4 from '../src/images/course4.svg';
function Blogcourse() {
  return (
    <div className='lg:mr-10  space-y-8'>
      <div className='space-y-4'>
      <img src={course3} alt='course'/>
      <h1 className='text-blue-900  font-bold text-xl '>Ui/UX industry are doing great job in previous year history</h1>
      </div>
      <div className='space-y-4'>
      <img src={course4} alt='course'/>
      <h1 className='text-blue-900  font-bold text-xl '>Develop you design experience with figma features.</h1>
      </div>
    </div>
  )
}

export default Blogcourse


