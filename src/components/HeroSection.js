import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
    
    <div className="hero-section">
      <div className="hero-box hero-text">
        <h1>Learning with iNeuron made</h1>
        <div className="typewriter">
      <h1 className="typewriter-text">{"<"}Hello, World!{">"}</h1>
    </div>
        <p>Take your career to the next level with industry-ready programs. An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.</p>
        <button>Explore Courses</button>
      </div>
      <div className="hero-box hero-image">
        <img src='./images/image-hr-01.png' alt="Learning with iNeuron" />
      </div>
    </div>

<div className="stats-container">
<div className="stats-box">
  <img
    alt="figure"
    src="./images/image-hr-1-1-icon.png"
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">55%</h4>
    <p className="stats-description">Average Salary Hike</p>
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
    <h4 className="stats-title">400+</h4>
    <p className="stats-description">Different Courses</p>
  </div>
</div>

<div className="stats-box">
  <img
    alt="figure"
    src="./images/image-hr-1-3-icon.png"
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">10000+</h4>
    <p className="stats-description">Career Transitions</p>
  </div>
</div>

<div className="stats-box">
  <img
    alt="figure"
    src="./images/image-hr-1-4-icon.png"
    className="stats-image"
    loading="lazy"
  />
  <div className="stats-text">
    <h4 className="stats-title">400+</h4>
    <p className="stats-description">Hiring Partners</p>
  </div>
</div>
</div>

</>
  );
};

export default HeroSection;
