import React from 'react'
import Menu from './Menu'
import BG from '../src/images/BG.svg'

function Home() {
  return (
    <div className="homeContainer justify-center items-center sm:bg-cover md:bg-contain lg:bg-cover xl:bg-contain  font-sans" style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover',height: '500px',width: '100vw'}}>
      <Menu />
    </div>
  );
}

export default Home;