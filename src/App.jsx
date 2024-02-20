import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import Group from './Group';
import Pricing from './Pricing';
import Support from './Support';


const App = () => {
  return (
  <div className='overflow-hidden '>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes>
      <Route path="/" element={<Service/>} />
      </Routes>

      <Routes>
      <Route path="/" element={<Group/>} />
      </Routes>

      <Routes>
      <Route path="/" element={<Pricing/>} />
      </Routes>

      <Routes>
      <Route path="/" element={<Support/>} />
      </Routes>

    </Router>
  </div>
  );
};

export default App;
