import React from 'react';
import './Home.css';
import image from '../assets/images/image.jpg';

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
        </div>
        
        <div className="left-side">
          <img src={image} width='488px' className='background-image' />
        </div>

      </div>
    </div>
  );
};

export default Home