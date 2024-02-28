import React from 'react';

function Footermenu() {
  return (
    <div className="flex flex-wrap space-x-8 justify-center items-start space-y-8 md:space-y-0 md:space-x-16 "> 
      <div className="flex flex-col space-y-4">
        <h1 className='text-blue-950 font-normal text-xl'>Company</h1>
        <ul className='space-y-2 text-blue-900 font-normal text-sm'>
          <li>About</li>
          <li>Affiliate</li>
          <li>Careers & Culture</li>
          <li>Blog</li>
          <li>Press</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className='text-blue-950 font-normal text-xl'>About Us</h1>
        <ul className='space-y-2 text-blue-900 font-normal text-sm'>
          <li>Support Center</li>
          <li>Customer Support</li>
          <li>About Us</li>
          <li>Copyright</li>
          <li>Popular Campaign</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className='text-blue-950 font-normal text-xl'>Our Information</h1>
        <ul className='space-y-2 text-blue-900 font-normal text-sm'>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Site Map</li>
          <li>Store Hours</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className='text-blue-950 font-normal text-xl'>My Account</h1>
        <ul className='space-y-2 text-blue-900 font-normal text-sm'>
          <li>Press inquiries</li>
          <li>Social media</li>
          <li>Directories</li>
          <li>Images & B-roll</li>
          <li>Permissions</li>
        </ul>
      </div>

      <div className="flex flex-col space-y-4">
        <h1 className='text-blue-950 font-normal text-xl'>Policy</h1>
        <ul className='space-y-2 text-blue-900 font-normal text-sm'>
          <li>Application security</li>
          <li>Software principles</li>
          <li>Unwanted software policy</li>
          <li>Responsible supply chain</li>
        </ul>
      </div>
    </div>
  );
}

export default Footermenu;
