import React from "react";
import "../../src/App.css";
import image from '../assets/images/image.jpg';
import whatsapp from '../assets/icons/whatsapp.png';
import telephone from '../assets/icons/telephone.png';
import linkedin from '../assets/icons/linkedin.png';
import mail from '../assets/icons/mail.png';

const Home = () => {
  return (
    <div className="home">
      <div className="right-side">
        <h1 className="text-1">Hi________ <br /> This Is Dipayan Das</h1>
        <h1 className="text-2">I Am A</h1>
        <button className="explore-button">Explore</button>
        <div className="social-links">
            <a href=""><img src={whatsapp} width='44px' alt="" className="button" /></a>
            <a href=""><img src={telephone} width='44px' alt="" className="button" /></a>
            <a href=""><img src={linkedin} width='44px' alt="" className="button" /></a>
            <a href=""><img src={mail} width='44px' alt="" className="button" /></a>
        </div>
      </div>
      
      <div className="left-side"><img src={image} width='488px' alt="" className="background-image" /></div>
    </div>
  );
};

export default Home;