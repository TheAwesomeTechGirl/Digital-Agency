import React from 'react';
import Logo from '../src/images/logo.svg';

function Menu() {
  return (
    <div className="menu justify-start items-center flex flex-row space-x-6 ml-32 p-5">
      <div className="logo justify-center items-center flex flex-row">
        <img src={Logo} alt="Logo" className='w-5'/>
        <span className="ml-2 text-indigo-900 font-bold">StartUpLand</span>
      </div>
      <div className="list justify-center items-center flex flex-row">
        <ul className="flex flex-row space-x-4">
          <li className="flex flex-row items-center text-gray-600 font-normal">Home</li>
          <li className="flex flex-row items-center text-gray-600 font-normal">Advertise
            <span className="ml-1">
              <svg className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </li>
          <li className="flex flex-row items-center text-gray-600 font-normal">Support
            <span className="ml-1">
              <svg className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </li>
          <li className="flex flex-row items-center text-gray-600 font-normal">About</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
