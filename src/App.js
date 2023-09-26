import React from 'react';
import SideNav from './SideNav';
import Tracker from './components/Tracker';
import Company from './components/Company';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Applications from './components/Applications';
import Home from './components/Home';
import { createTheme, ThemeProvider } from "@mui/material";





function App() {
  const theme = createTheme({
    spacing: 1, // Adjust this value to change the spacing
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={< Applications />}></Route> 
          <Route path="/tracker" exact element={< Tracker />}></Route> 
          <Route path="/company" exact element={< Company />}></Route>
          <Route path="/home" exact element={< Home />}></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
