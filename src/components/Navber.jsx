import React from "react";
import "../../src/App.css";
import whatsapp from "../assets/icons/whatsapp.png";
import telephone from "../assets/icons/telephone.png";
import linkedin from "../assets/icons/linkedin.png";
import mail from "../assets/icons/mail.png";

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

        <div className="buttons">
          <a href=""><button>Github</button></a>
          {/* <div className="social-links">
            <a href=""><img src={whatsapp} width='34px' alt="" className="button" /></a>
            <a href=""><img src={telephone} width='34px' alt="" className="button" /></a>
            <a href=""><img src={linkedin} width='34px' alt="" className="button" /></a>
            <a href=""><img src={mail} width='34px' alt="" className="button" /></a>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Navber;