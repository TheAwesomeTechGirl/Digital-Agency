import React from 'react'
import Supporttext from './Supporttext'
import Supportimage from './Supportimage'

function Support() {
  return (
    <div className='justify-start items-center mt-16 ml-12 lg:ml-48 lg:mt-28'>
      <div className='flex flex-col space-y-10 lg:flex lg:flex-row '>
        <Supporttext/>
        <Supportimage/>
      </div>
    </div>
  )
}

export default Support