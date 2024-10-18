import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';
import { Container, Typography } from '@mui/material';
import CourseAccordion from '../Modules';
import Projects from '../Projects';
import "./Hero.css"
import Roadmap from './RoadMap';
import MasterTools from './Master';
import Faqs from './Faqs';
import Hiring from './Hiring';

const CourseIntro = () => {

  const copyToClipboard = () => {
    // Check if the browser supports the clipboard API
    if (navigator.clipboard) {
      // Get the current URL
      const currentURL = window.location.href;

      // Use the clipboard API to copy the URL to the clipboard
      navigator.clipboard.writeText(currentURL).then(() => {
        alert('Link copied to clipboard!');
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    } else {
      // Fallback for browsers that don't support the clipboard API
      alert('Your browser does not support clipboard copying.');
    }
  };
  return (
    <>
    
    
    <div className='course-intro-m'
    style={{}}
    >

    <div className="course-hero-section">
      <div className="hero-box hero-text">
      <Typography variant="body2" gutterBottom>
               
                <span style={{ color: 'white',}}>
  <a href="/" style={{ color: 'white', textDecoration: 'none' }}>🏠Home</a> {" "}
  &gt; {" "}
  <a href="/courses/details" style={{ color: 'white', textDecoration: 'none' }}>Courses</a> {" "}
  &gt; {" "}
  <a href="/coursedetails" style={{ color: 'white', textDecoration: 'none' }}>Data Science with Gen AI</a>{" "}
</span>

              </Typography>
              <h1>Data Science With Gen AI</h1>
        
        <p>This beginner-friendly course is designed to introduce you to the exciting world of data science. You will learn the basics of Python programming, essential statistics, and introductory concepts in machine learning. Through hands-on exercises, you’ll explore how to analyze data, build  machine learning models, and understand foundational deep learning & NLP  techniques. By the end of this course, you'll have a solid understanding of key concepts in data science, empowering you to pursue further studies or start your career in this dynamic field.</p>
        <div className="courses-details--pricing">
          <p className="courses-details--price">₹ 6999</p>
          <p className="courses-details--discount">₹ 85000</p>
          <p className="courses-details--discount-label">91% Discount</p>
        </div>
        <button onClick={copyToClipboard}>Share</button>
      </div>
      <div className="hero-box hero-image">
        {/* <img src='./images/image-hr-01.png' alt="Learning with iNeuron" /> */}
      </div>
    </div>

    <div className="dt-container">
            <div className="dt-content">
              <div className="dt-item">
                <h3 className="dt-heading"> Live Instructor Led</h3>
                <p className="dt-subheading">Course Type</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">Date</h3>
                <p className="dt-subheading">Start Date</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">Telugu & English</h3>
                <p className="dt-subheading">Language</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">4-5 Month</h3>
                <p className="dt-subheading">Duration</p>
              </div>
              <div className="dt-item">
                <h3 className="dt-heading">7:30 PM,Mon-Sat</h3>
                <p className="dt-subheading">Class Timings</p>
              </div>
            </div>
          </div>

    </div>
    <Container>
    <Roadmap/>
    <MasterTools/>

    <CourseAccordion />
    <Hiring/>
    <Faqs/>
    </Container>

    {/* <Projects /> */}
    
    </>


  )
}

export default CourseIntro;