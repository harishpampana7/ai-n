import React from "react";
import "./About.css"; // Optional external CSS for styling
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
// import teamImage from "./path-to-your-image/image.png"; // Ensure the correct path to your image

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
      <section className="about-us-section" style={{ backgroundColor: "#f0f8ff" }}>
        <h2 className="section-title">About Us</h2>
        <p className="about-description">
          Welcome to Korpready, your bridge to affordable, high-quality education designed to
          connect college students with real job opportunities. We focus on making learning
          accessible without sacrificing quality. Our expert-crafted programs provide practical
          skills that matter in today’s job market.
        </p>
        <p className="about-description">
          At Korpready, we offer a comprehensive learning experience, including live classes,
          personalized 1:1 doubt clearing sessions, internships, certifications, portfolio building,
          resume assistance, mock interviews, and LinkedIn profile development. Our holistic
          approach ensures you are well-prepared for your career.
        </p>
        <p className="about-description">
          Join the Korpready community, where support and innovation drive success. Whether
          you're just starting your journey or looking to enhance your skills, Korpready is your
          partner in achieving a bright future filled with endless opportunities.
        </p>
        {/* <img className="team-image" src={""} alt="Our Team" /> */}
      </section>

      <section className="mission-section" style={{ backgroundColor: "#e0f7fa" }}>
        <h2 className="section-title">Our Mission</h2>
        <p className="mission-description">
          Our goal is to make education and technology skills affordable and accessible to
          everyone, regardless of their economic and educational backgrounds. Our mission is to
          significantly reduce unemployment by empowering individuals with the essential skills
          needed to thrive in today’s tech-driven job market. We believe that every young person
          deserves the opportunity to succeed, and we are committed to transforming learners into
          skilled professionals through tailored training programs.
        </p>
        {/* <img className="mission-image" src="path-to-mission-image.png" alt="Our Mission" /> */}
      </section>
      <Footer/>
    </div>
    
  );
};

export default AboutUs;
