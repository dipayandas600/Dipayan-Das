import React from 'react';
import '../../src/App.css';

const Navber = () => {
  return (
    <div className="navber">
      <nav className="navber-section">
        <h1 className="logo">Dipayan Das</h1>
        
        <ul className="navber-links">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
        
        <div className="upload-and-user">
          <button className="upload-button">Upload</button>
          <button className="user-button"><img src="" alt="" className="user-icon" /></button>
        </div>
      </nav>
    </div>
  );
};

export default Navber