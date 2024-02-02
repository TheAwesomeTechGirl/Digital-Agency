import React from 'react'
import Servicetitle from './Servicetitle'
import Servicecards from './Servicecards'

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
