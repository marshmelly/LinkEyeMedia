import React, { useState } from 'react';
import './Navbar.css';
import link from './project files/Linkeye copy.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
     <div> <h4 className='header'>LINK EYE MEDIA  <img src={link} alt=""  className='photo'/></h4></div>
      
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="/home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
