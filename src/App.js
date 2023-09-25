import React from 'react';
import SideNav from './SideNav';
import Tracker from './components/Tracker';
import Resources from './components/Resources';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Applications from './components/Applications';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={< Applications />} />  
          <Route path="/" exact element={< Tracker />} />  
          <Route path="/" exact element={< Resources />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
