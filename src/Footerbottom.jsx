import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/images/logo.svg';

function Footerbottom() {
  return (
    <div className='lg:space-x-56 justify-center items-center flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center p-5'>
      <div className="logo justify-center items-center flex flex-row">
        <img src={Logo} alt="Logo" className='w-5'/>
        <span className="ml-2 text-indigo-900 font-bold">StartUpLand</span>
        <p className='text-gray-500 ml-2'>Copyright by 2019 Redq, Inc</p>
      </div>

      <ul className={`flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 lg:items-center`}>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/' className="nav-links">Home</Link>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/advertise' className="nav-links">Advertise</Link>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/support' className="nav-links">Support</Link>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/marketing' className="nav-links">Marketing</Link>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/faq' className="nav-links">FAQ</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footerbottom;
