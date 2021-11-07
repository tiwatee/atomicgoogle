import React from 'react';
import '../App.css';
// import ninedots from '../images/nine-dots.jpeg'
// import { Component } from 'react';
// import {faNine}

const Topbar = () =>{
    return (
        <div className="topBar">
            <a href="/"> Gmail </a>
            <a href = "/"> Images</a>
            {/* <span><img src= {ninedots} alt="google_dots"/></span>
            <span><a href="/" id="mail">O</a></span> */}
        </div>
    );
}

export default Topbar;