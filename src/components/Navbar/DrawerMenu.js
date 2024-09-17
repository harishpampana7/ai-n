import React, { useState } from 'react';
import './DrawerMenu.css';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Combine icon imports in one line

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
            <a className="navbar-logo" href="https://ineuron.ai">
              <img src="./images/in-logo.png" alt="logo" />
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
          <button className="navbar-login-btn2" onClick={toggleDrawer}>
            Login / Register
          </button>
          <li><a href="#Courses" onClick={toggleDrawer}>Courses</a></li>
          <hr />
          <li><a href="#One-Neuron" onClick={toggleDrawer}>One Neuron</a></li>
          <hr />
          <li><a href="#Support-System" onClick={toggleDrawer}>Support System</a></li>
          <hr />
          <li><a href="#Neuro-Lab" onClick={toggleDrawer}>Neuro Lab</a></li>
          <hr />
          <li><a href="#Job-Portal" onClick={toggleDrawer}>Job Portal</a></li>
          <hr />
          <li><a href="#Internship-Portal" onClick={toggleDrawer}>Internship Portal</a></li>
          <hr />
          <li><a href="#Become-an-affiliate" onClick={toggleDrawer}>Become an affiliate</a></li>
          <hr />
          <li><a href="#Hall-of-fame" onClick={toggleDrawer}>Hall of fame</a></li>
          <hr />
        </ul>
      </nav>
    </div>
  );
};

export default DrawerMenu;
