import React, { useState } from 'react';
import './Navbar.css';
import link from './project files/Linkeye.jpg'

const Navbar2 = () => {

    const [isOpen, setIsOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className='navbar'>

      <div className='logo'>
        <a href="/"> <img src={link} alt=""  className='nav-photo'/></a>
      </div>
         <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" role="button" tabIndex={0} onKeyPress={(e) => { if (e.key === 'Enter') toggleMenu(); }}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      
      <ul className={`navLinks ${isOpen ? 'open' : ''}`}>
        <li className='nav-item'><a href="/home">Home</a></li>
        <li className='nav-item'><a href="/services">Services</a></li>
        <li className='nav-item'><a href="/portfolio">Portfolio</a></li>
        <li className='nav-item'><a href="/about">About</a></li>
        <li className='nav-item'><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar2;