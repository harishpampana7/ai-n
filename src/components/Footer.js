import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Footer.css"; // Import the CSS file for styling
import Logo2 from "../Images/Logo.png"


const Footer = () => {
  return (
    <footer className="footer mt-3">
      <div className="footer-box1">
        <img src={Logo2} alt="Logo" className="footer-logo" />
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a style={{
                textDecoration:'none',color:'#c1c4ca'
            }} href="mailto:info@example.com">contact@ineuron.ai</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a style={{
                textDecoration:'none',color:'#c1c4ca'
            }} href="tel:+918071176111">+91 8071176111</a>
          </div>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://Youtube.com" className="social-icon">
            <FaYoutube />
          </a>
          <a href="https://Linkedin.com" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://Discord.com" className="social-icon">
            <FaDiscord />
          </a>
        </div>
      </div>
      <div className="footer-box2">
        <h3>Company</h3>
        <hr className="footer-hr-heading" />
        <div className="footer-br-div">
          <div>
            <p>
              <a href="/About">About us</a>
            </p>
            <p>
              <a href="#">Contact us</a>
            </p>
            <p>
              <a href="#">FAQs</a>
            </p>
          </div>
          <div>
            {/* <p>
              <a href="#">Certificate verification</a>
            </p> */}
            <p>
              <a href="/PrivacyPolicy">Privacy policy</a>
            </p>
            <p>
              <a href="#">Terms and conditions</a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="footer-box3">
        <h3>Products</h3>
        <hr className="footer-hr-heading" />
        <div className="footer-br-div">
          <div>
            <p>
              <a href="#">One Neuron</a>
            </p>
            <p>
              <a href="#">Support System</a>
            </p>
            <p>
              <a href="#">Neuro Lab</a>
            </p>
            <p>
              <a href="#">Job Portal</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Internship Portal</a>
            </p>
            <p>
              <a href="#">Become an affiliate</a>
            </p>
            <p>
              <a href="#">Hall of fame</a>
            </p>
            <p>
              <a href="#">Hackathon</a>
            </p>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
