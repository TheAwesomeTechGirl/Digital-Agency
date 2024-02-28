import React from 'react'
import Blogheader from './Blogheader'
import Blogcourse1 from './Blogcourse1'
import Blogcourse2 from './Blogcourse2'
import Blogcourse from './Blogcourse'

function Blog() {
  return (
    <div>
      <Blogheader/>
     <div className='flex flex-col lg:flex-row justify-center items-center '>
     <Blogcourse1/>
      <Blogcourse2/>
      <Blogcourse/>
     </div>
    </div>
  )
}

export default Blog
