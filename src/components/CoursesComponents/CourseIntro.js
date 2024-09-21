import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Typography } from '@mui/material';
import CourseAccordion from '../Modules';
import Projects from '../Projects';

const CourseIntro = () => {
  return (
    <>
    
    
    <div className='course-intro-m'>

    <div className="course-hero-section">
      <div className="hero-box hero-text">
      <Typography variant="body2" gutterBottom>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  {" "}
                  🏠︎ Home &gt; Data Science
                </a>
              </Typography>
              <h1>Data Science Masters Pro 2024</h1>
        
        <p>Dive deep into the world of data science with our comprehensive course. Learn advanced techniques, tools, and algorithms to analyze data, gain insights, and make informed decisions. Elevate your skills and embark on a rewarding career in data science.</p>
        <div className="courses-details--pricing">
          <p className="courses-details--price">₹ 8,000.00</p>
          <p className="courses-details--discount">₹ 10,000.00 </p>
          <p className="courses-details--discount-label">20% Discount</p>
        </div>
        <button>Share</button>
      </div>
      <div className="hero-box hero-image">
        {/* <img src='./images/image-hr-01.png' alt="Learning with iNeuron" /> */}
      </div>
    </div>

    <div className="dt-container">
            <div className="dt-content">
              <div className="dt-item">
                <h3 className="dt-heading">29th Apr'24</h3>
                <p className="dt-subheading">Start Date</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">Hinglish</h3>
                <p className="dt-subheading">Language</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">4-5 Month</h3>
                <p className="dt-subheading">Duration</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">7 -10 PM IST WED</h3>
                <p className="dt-subheading">Doubt Class Timing</p>
              </div>
            </div>
          </div>

    </div>

    <CourseAccordion />

    <Projects />
    
    </>


  )
}

export default CourseIntro;