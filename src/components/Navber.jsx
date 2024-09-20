import React from 'react';
import '../../src/App.css';

const Navber = () => {
  return (
    <div className="navber">
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
        
        <div className="upload-and-user">
          <button className="upload-button">Upload</button>
        </div>
      </nav>
    </div>
  );
};

export default Navber