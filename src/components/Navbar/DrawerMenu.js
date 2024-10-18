import React, { useState } from 'react';
import './DrawerMenu.css';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Combine icon imports in one line
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from "jwt-decode"; 
import Logo from "../../Images/Logo.png";

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const user = localStorage.getItem("User");

  // Initialize decoded token and first letter
  let decodedToken;
  let firstLetter = "";

  if (user) {
    decodedToken = jwtDecode(user); // Decode the JWT token

    // Assuming the email is in the decoded token and the name is the part before the '@'
    if (decodedToken?.email) {
      firstLetter = decodedToken.email.charAt(0).toUpperCase(); // Get first letter of the name
    }
  }
  const navigate = useNavigate();

  const Logout=()=>{
    localStorage.removeItem("user")
    navigate("/login")
  }
  return (
    <div className={`drawer ${isOpen ? 'open' : 'closed'}`}>
      {!isOpen && (
        <>
          <button className="search-icon-drawer">
            <FaSearch />
          </button>
          <button className="drawer-toggle" onClick={toggleDrawer}>
            ☰
          </button>
        </>
      )}
      <nav className={`drawer-nav ${isOpen ? 'open' : 'closed'}`}>
        {isOpen && (
          <div className="drawer-header">
            <a className="navbar-logo" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <div style={{display:'flex'}}>
            <FaSearch className="drawer-close" />
            <button className="drawer-close" onClick={toggleDrawer}>
            <FaTimes />
            </button>
            </div>
          </div>
        )}
        <ul>
          {user?<button className="navbar-login-btn2" onClick={Logout}>
            Logout
          </button>:<button className="navbar-login-btn2" onClick={toggleDrawer}>
            Login / Register
          </button>}
          
          <li><a href="#Courses" onClick={toggleDrawer}>Courses</a></li>
          <hr />
          <li><a href="#One-Neuron" onClick={toggleDrawer}>Lab</a></li>
          <hr />
          <li><a href="#Support-System" onClick={toggleDrawer}>Internship Portal</a></li>
          <hr />
          <li><a href="#Neuro-Lab" onClick={toggleDrawer}>Mock-Interviews</a></li>
          <hr />
          <li><a href="#Job-Portal" onClick={toggleDrawer}>Blog</a></li>
          <hr />
          <li><a href="/About" onClick={toggleDrawer}>Company</a></li>
          <hr />
          {/* <li><a href="#Become-an-affiliate" onClick={toggleDrawer}>Become an affiliate</a></li>
          <hr />
          <li><a href="#Hall-of-fame" onClick={toggleDrawer}>Hall of fame</a></li> */}
          <hr />
        </ul>
      </nav>
    </div>
  );
};

export default DrawerMenu;
