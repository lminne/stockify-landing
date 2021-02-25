import React from 'react';
import './App.css';
import './Components/Navbar/navbar';
import Navbar from "./Components/Navbar/navbar";
import HeroSec from "./Components/HeroSec/herosec";

function App() {
  return (
    <div>
      <Navbar/>
      <HeroSec/>
    </div>
  );
}

export default App;
