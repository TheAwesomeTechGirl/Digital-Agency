import React from 'react';
import Menu from './Menu';
import BG from '../src/images/BG.svg';
import Hometext from './Hometext';
import Homeform from './Homeform';
import Sponsor from './Sponsor';

function Home() {
  return (
    <div className="homeContainer justify-center items-center sm:bg-cover   md:bg-contain lg:bg-cover xl:bg-contain font-sans" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}>
      <Menu />
      <Hometext/>
      <Homeform/>
      <Sponsor/>
    </div>
  );
}

export default Home;
