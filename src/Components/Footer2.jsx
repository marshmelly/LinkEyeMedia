import React from 'react';
import  './Footer2.css';

const Footer2 = () => {
  return (
    <footer className='footer'>
      <div className="footerContainer">
        {/* Social Media Column */}
        <div className='footerColumn'>
          <h3>Connect With Us</h3>
          <ul className='socialLinks'>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i> LinkedIn
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
        <p>&copy; {new Date().getFullYear()} LInk Eye Media. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;