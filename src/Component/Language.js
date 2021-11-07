import React from 'react';
import '../App.css';
const Language = () =>{
    return (
        <div>
            <div className="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
            </div>
            <div className="language">
                <p>Google offered in: 
                    <a href="/" >Hausa</a>
                    <a href="/" >Igbo</a>
                    <a href="/" >Ede Yoruba</a>
                    <a href="/" >Nigerian Pidgin</a>
                </p>
            </div>
        </div>
    );
}

export default Language;