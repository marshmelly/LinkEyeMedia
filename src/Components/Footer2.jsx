import React from 'react';
import  './Footer2.css';
import fb from './project files/fbb.jpeg'
import ig from './project files/ig.jpeg'
import x from'./project files/x.jpeg'

const Footer2 = () => {
  return (
    <footer className='footer'>
      <div className="footerContainer">
        {/* Social Media Column */}
        <div className='footerColumn'>
          <h3>Connect With Us</h3>
          <ul className='socialLinks'>
            <li>
              <a href="https://www.facebook.com/search/top?q=zash%20photocreations" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i> Facebook <img src={fb} alt="facebook" className='photo' />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i> Twitter<img src={x} alt="" className='photo' />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zashphotocreations/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i> Instagram <img src={ig} alt="" className='photo' />
              </a>
            </li>
          
          </ul>
        </div>

        {/* Motto Column */}
        <div className='footerColumn'>
          <h3>Our Promise</h3>
          <p className='motto'>We deliver nothing but the best</p>
        </div>

        {/* Quick Links Column */}
        <div className='footerColumn'>
          <h3>Quick Links</h3>
          <ul className='socialLinks'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className='footerBottom'>
        <p>&copy; {new Date().getFullYear()} Link Eye Media. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;