import React from 'react';
import '../App.css';

const Footer = () =>{
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <p>Nigeria</p>
            </div>
            <hr/>
            <div className="footer-bottom">
                <div className= "left">
                    <a href="/"> About </a>
                    <a href="/"> Advertising</a>
                    <a href="/"> Business</a>
                    <a href="/" className="hide"> How Search Works</a>
                </div>

                <a href="/" className="hide"> Carbon Neutral Since 2007</a>
                
                <div className= "right">
                    <a href="/"> Privacy</a>
                    <a href="/"> Terms</a>
                    <a href="/"> Settings</a>
                </div>
            </div>
        </div>
    );
}
    
export default Footer;