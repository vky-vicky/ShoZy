import React, { useState } from 'react';
import shoe from "../Components/Assets/main1.png"; // Adjust the path as necessary
import icon from "../Components/Assets/icon.png";
import menu from "../Components/Assets/menu.png"; // Import the hamburger icon
import './Home.css';

export const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <main className='hero' id='home'>
        <div className="bg1">
          <div className="logo">
            <h3>Shozy</h3>
            <img src={icon} className='logoo' height={50} width={50} alt="Logo" />
          </div>
          
          <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#collection">Collection</a></li>
              <li><a href="#offer">Offer</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            <img src={menu} alt="Menu" className={`menu-icon ${isMenuOpen ? 'open' : ''}`} />
          </div>

          <div className="content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. EXPLORE OUR RANGE AND STEP INTO CONFIDENCE, WHETHER YOU'RE AT WORK, ON THE WEEKEND, OR HITTING THE GYM.</p>
          </div>

          <div className="shopping"></div>
          <div className="img">
            <img src={shoe} height={900} width={600} alt="Shoe" /> {/* Adjusted the size */}
          </div>
        </div>
      </main>
    </>
  );
};
