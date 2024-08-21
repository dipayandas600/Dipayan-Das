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
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
  );
};

export default Navber