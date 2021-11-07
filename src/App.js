import './App.css';
import React from 'react';
// import sidehustlelogo from './images/logo.jpg';
import Topbar from './Component/Topbar';
import Footer from './Component/Footer';
import Language from './Component/Language';
import sidehustlelogo from './images/sidehustle.png';
import { useState } from 'react';
import { MdMic } from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai'

function App() {
  const [search, setSearch]= useState("");
  
  return (
    <div className="App">
      <div className="wrapper">
        <Topbar />

        <div className="logoName">
          {search.length === 0 ? <img src={sidehustlelogo} alt="sideHustle logo"/> : search}
        </div>

        <div className="inputArea">
          <span className="icons" id="search"><AiOutlineSearch /></span>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <span className="icons" id="mic"><MdMic /></span>
        </div>

        <Language />

        <Footer />
      </div>
    </div>
  );
}

export default App;
