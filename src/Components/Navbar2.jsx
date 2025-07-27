import React, { useState } from 'react';
import './Navbar2.css';
import link from './project files/Linkeye.jpg'

const Navbar2 = () => {

    const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='navbar'>
         <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <div className='logo'>
        <a href="/"> <img src={link} alt=""  className='photo'/></a>
      </div>
      <ul className='navLinks'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar2;