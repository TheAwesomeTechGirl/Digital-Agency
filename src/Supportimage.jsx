import React from 'react';
import man from '../src/images/man.svg';
import Okay from '../src/images/handok.svg';

function Supportimage() {
  return (
    <div className="flex flex-col lg:flex lg:flex-row lg:mr-56 ">
     <div className="bg-blue-500 w-36 h-24 lg:w-96 lg:h-24 lg:mt-8 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-r shadow-lg transform translate-y-2 lg:translate-y-0 lg:translate-x-16">
  <span className="font-normal lg:font-bold text-base lg:text-base text-white m-4 ">
    Hi, I’m Frank, let me know what can I do for 
    <span className="relative m-1">
      you 
      <img src={Okay} alt="Okay" className="absolute bottom-0  m-1 left-full transform translate-x-1 lg:translate-x-0 lg:translate-y-1/2" />
    </span>
  </span>
</div>


      <div className="mt-4 lg:mt-0">
        <img src={man} alt="man" className="w-38 lg:w-fit mr-32 rounded-tl-xl rounded-tr-3xl rounded-bl-xl rounded-br-3xl" />
      </div>
    </div>
  );
}

export default Supportimage;
