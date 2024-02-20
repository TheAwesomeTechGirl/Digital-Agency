import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Icon from '../src/images/icon.svg';
import Iconn from '../src/images/icon (1).svg';

function SupportText() {
  return (
    <div className="container space-y-4  mt-4">
      <h1 className="font-bold text-2xl lg:text-4xl text-indigo-950 leading-10">
        Do you need help? Our
        <br/>
        support team is ready to 
        <br/>
        help you
      </h1>
      <p className="font-sans font-normal text-sm  lg:text-base text-indigo-950 leading-7">
        Get your tests delivered at home, collect samples from the victory of the
        <br/>
         management that supplies the best design system
         <br/>
          guidelines ever.
      </p>

      <div className="support-card flex flex-row space-x-4  items-center">
        <img src={Icon} alt="Icon" className="w-12 h-12" />
       <div className='space-y-2'>
       <div className="flex flex-row space-y-2">
          <h1 className="font-bold text-lg text-indigo-950">Email client support</h1>
          <span className="text-gray-300 m-2"><FaLongArrowAltRight /></span>
        </div>
        <p className="font-normal text-base text-blue-950 leading-6">
            Ultimate access to all popular credit exercises
            <br/>
             and assessment materials.
          </p>
      </div>
       </div>

      <div className="support-card flex flex-row space-x-4 items-center">
        <img src={Iconn} alt="Iconn" className="w-12 h-12" />
        <div className='space-y-2'>
        <div className="flex flex-row space-y-2">
          <h1 className="font-bold text-lg text-indigo-950">Live ticket support</h1>
          <span className="text-gray-300 m-2"><FaLongArrowAltRight /></span>
        </div>
        <p className="font-normal text-base text-blue-950 leading-6">
            Total assessment corrections with live support
            <br/>
             tickets download access system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportText;
