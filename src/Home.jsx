import React from 'react';
import Menu from '../src/Menu';
import BG from '../src/images/BG.svg';
import Hometext from '../src/Hometext';
import Homeform from '../src/Homeform';
import Sponsor from './Sponsor';

function Home() {
  return (
    <div className="homeContainer justify-center items-center  font-sans" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', height: '100vh', width: '100vw'}}>
      <Menu />
      <Hometext/>
      <Homeform/>
      <Sponsor/>
    </div>
  );
}

export default Home;
