import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../src/images/logo.svg';
import dark from '../src/images/dark.svg';
import close from '../src/images/close.svg';

function Menu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="menu lg:space-x-8  justify-start items-center flex flex-row space-x-4 p-5 ml-2 mr-2 lg:ml-48 xl:ml-48">
      <div className="logo justify-center items-center flex flex-row">
        <img src={Logo} alt="Logo" className='w-5'/>
        <span className="ml-2 text-indigo-900 font-bold">StartUpLand</span>
      </div>
      <div className="menu-icon justify-center items-center flex flex-row  lg:hidden" onClick={handleClick} style={{ marginLeft: '130px' }}> {/* Add margin to push the menu icon away */}
        <img src={click ? close : dark} alt="hamburger" className="icon"/>
      </div>
      <ul className={`lg:flex space-x-10 lg:flex-row lg:items-center ${click ? "block" : "hidden"} lg:ml-auto `}>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/'  className="nav-links" onClick={closeMobileMenu}>Advertise</Link>
          <span className="ml-1">
            <svg className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/'  className="nav-links" onClick={closeMobileMenu}>Support</Link>
          <span className="ml-1">
            <svg className="h-3 w-3 text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </li>
        <li className="flex flex-row items-center text-gray-600 font-normal">
          <Link to='/'  className="nav-links" onClick={closeMobileMenu}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
