import React from 'react';
import paypalimg from '../src/images/paypal.svg';
import dropbox from '../src/images/Dropdown.svg';

function Sponsor() {
  return (
    <div className="sponsor-container justify-start items-center flex flex-row space-x-4 p-5 ml-2 mr-2 lg:ml-52 xl:ml-52">
      <div className="sponsor-list justify-center items-center flex flex-row">
        <ul className="flex flex-row space-x-4">
          <li className="flex flex-row items-center text-gray-400 font-normal"> Our clients</li>
          <li className="flex flex-row items-center text-gray-400 font-normal">
            <img src={paypalimg} alt="paypal" className="w-16" />
          </li>
          <li className="flex flex-row items-center text-gray-400 font-normal">
            Google
          </li>
          <li className="flex flex-row items-center text-gray-400 font-normal">
            <img src={dropbox} alt="dropbox" className="w-5" />
            <span>Dropbox</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sponsor;
