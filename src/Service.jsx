import React from 'react'
import Servicetitle from '../src/Servicetitle'
import Servicecards from '../src/Servicecards'

function Service() {
  return (
   <div className='justify-center items-center'>
     <div className='justify-center items-center w-full h-full'>
      <Servicetitle/>
      <Servicecards/>
    </div>
   </div>
  )
}

export default Service
