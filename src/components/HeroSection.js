import React from 'react';
import './HeroSection.css';
import Hero from "../Images/Hero-section.png"
import Teacher from "../Images/training.png"
import Mode from "../Images/video-camera.png"

import Student from "../Images/graduated.png"
const HeroSection = () => {
  return (
    <>
    
    <div className="hero-section">
      <div className="hero-box hero-text">
        <h1>Shape your future with!</h1>
      <h1 className="typewriter-text">{"<"}Korpready{">"}</h1>
        <p>Connect your college education to real-world job opportunities with our learning platform.
        Explore a variety of tech courses that prepare you for your career. Learn essential skills and get ready to land a job before you even graduate, all at affordable rates. Start your career today!</p>
        <button>Explore Courses</button>
      </div>
      <div className="hero-box hero-image">
        <img src={Hero} alt="Learning with iNeuron" />
      </div>
    </div>

<div className="stats-container">
<div className="stats-box">
  <img
    alt="figure"
    src={Student}
    className="stats-image"
    loading="lazy"
    style={{width:"40px",height:"40px"}}
  />
  <div className="stats-text">
    <h4 className="stats-title">10+</h4>
    <p className="stats-description">Students Enrolled</p>
  </div>
</div>

<div className="stats-box">
  <img
    alt="figure"
    src="./images/image-hr-1-2-icon.png"
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">1</h4>
    <p className="stats-description">Different Courses</p>
  </div>
</div>

<div className="stats-box">
  <img
    alt="figure"
    src={Mode}
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">Online</h4>
    <p className="stats-description">Mode</p>
  </div>
</div>

<div className="stats-box">
  <img
    alt="figure"
    src={Teacher}
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">1 to 1</h4>
    <p className="stats-description">Mentoring</p>
  </div>
</div>
</div>

</>
  );
};

export default HeroSection;
