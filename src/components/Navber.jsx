import React, { useState } from 'react';
import './Navber.css';
import '../components/Pages/Responsive1.css';

const Navber = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-section">
      <nav className="navber-section">
        <h1 className="logo">Dipayan Das</h1>

        <ul className={`navber-links ${isOpen ? 'open' : ''}`}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navber