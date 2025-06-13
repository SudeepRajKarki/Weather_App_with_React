import React, { useState } from 'react';
import Weather from './weather';
import './App.css';
import Footer from './footer';

const API_KEY = "38e3d3fd7d0e407092a153758250506"; 

function App() {
  
  return(
    <>
    <Weather/>
     <Footer/>
     </>
  );
}

export default App;
