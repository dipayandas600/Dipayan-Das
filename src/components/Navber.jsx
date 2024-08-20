import React from 'react';
import './Navber.css';

const Navber = () => {
  return (
    <header className="header-section">
        <nav className="navber-section">
            <h1 className="logo">Dipayan Das</h1>

            <ul className="navber-links">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
  )
}

export default Navber