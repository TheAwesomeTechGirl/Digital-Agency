import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Service from './Service';


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
    </Router>
  </div>
  );
};

export default App;
