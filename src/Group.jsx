import React from 'react';
import Groupimg from '../src/images/group.svg';

function Group() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-5 mt-10">
        <img src={Groupimg} alt='groupimg' className="mx-auto md:mx-6" />
      </div>
      <div className="md:w-1/2  mx-14">
        <div className="grouptext mt-0  md:mt-32">
          <h1 className="text-xl  text-blue-950 md:text-3xl font-bold mb-4">Customer support is our main
          <br/>
           priority with their hundred
           <br/> 
           percent satisfaction.</h1>
          <p className="mb-4 text-blue-950 font-normal text-base">Get your tests delivered at let home collect sample from the
          <br/>
           victory of the managments that supplies best design system 
           <br/>
           guidelines ever.</p>
          <ul className="flex flex-row md:flex-row text-blue-950">
            <li className="flex flex-row items-center font-medium text-sm mr-4 mb-2">
              <img src='../src/images/marked.svg' alt='marked' className="h-2 w-3 mt-1 mr-1"></img>
              <span>Medical and vision</span>
            </li>
            <li className="flex flex-row items-center font-medium text-sm mr-4 mb-2">
              <img src='../src/images/marked.svg' alt='marked' className="h-2 w-3 mt-1 mr-1"></img>
              <span>HSAs and FSAs</span>
            </li>
          </ul>
          <ul className="flex flex-row md:flex-row text-blue-950">
          <li className="flex flex-row items-center font-medium text-sm mb-2">
              <img src='../src/images/marked.svg' alt='marked' className="h-2 w-3 mt-1 mr-1"></img>
              <span>Life insurance</span>
            </li>
           
            <li className="flex flex-row  items-center font-medium text-sm mb-2 ml-12">
              <img src='../src/images/marked.svg' alt='marked' className="h-2 w-3 mt-1 mr-1"></img>
              <span>Commuter benefits</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Group;
