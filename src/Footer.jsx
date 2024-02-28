import React from 'react'
import Footermenu from './Footermenu'
import Footerbottom from './Footerbottom'

function Footer() {
  return (
    <div className='bg-gray-50 mt-32 '>
    <div className='space-y-16 '>
    <Footermenu/>
      <Footerbottom/>
    </div>
    </div>
  )
}

export default Footer
