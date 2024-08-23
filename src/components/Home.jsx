import React from 'react';
import './Home.css';
import image from '../assets/images/image.jpg';
import whatsapp from '../assets/icons/whatsapp.png';
import telephone from '../assets/icons/telephone.png';
import linkedin from '../assets/icons/linkedin.png';
import mail from '../assets/icons/mail.png';

const Home = () => {
  return (
    <div className="home-section">
      <div className="right-and-left-side">

        <div className="right-side">
          <h1 className="text-1">
            Hi________ <br />
            This Is Dipayan Das
          </h1>

          <h1 className="text-2">I Am A</h1>
          
          <div className="buttons">
            <button className="hire-me">Hire Me</button>
            <button className="github">Github</button>
            <button className="download-cv">Download CV</button>
          </div>
          
          <div className="social-links">
            <img src={whatsapp} width='44px' className='whatsapp' />
            <img src={telephone} width='44px' className='telephone' />
            <img src={linkedin} width='44px' className='linkedin' />
            <img src={mail} width='54px' className='mail' />
          </div>
        </div>
        
        <div className="left-side">
          <img src={image} width='488px' className='background-image' />
        </div>

      </div>
    </div>
  );
};

export default Home