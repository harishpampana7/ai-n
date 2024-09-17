

import React, { useState } from "react";
import "./Navbar.css";
import DrawerMenu from "./DrawerMenu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-inner">
            
            <div className="navbar-top">
              {/* Logo */}
              <a className="navbar-logo" href="https://ineuron.ai">
                <img src="./images/in-logo.png" alt="logo" />
              </a>

              <DrawerMenu isOpen={drawerOpen} onToggle={toggleDrawer} />
              {/* Search Bar */}
              <div className="navbar-search">
                <svg
                  className="search-icon"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z"
                    fill="currentColor"></path>
                </svg>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by product title"
                  value=""
                  onChange={() => {}}
                />
              </div>

              {/* Login/Register Button */}
              <button className="navbar-login-btn">Login / Register</button>
            </div>

            {/* Bottom Section: Navigation Links */}
            <div className="navbar-links d-none">
              <a className="navbar-link navbar-link-courses" href="#courses">
                Courses
                
                <i></i>
              </a>
              <a className="navbar-link" href="/one-neuron">
                One Neuron<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://support.ineuron.ai">
                Support System<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://neurolab.ineuron.ai">
                Neuro Lab<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://jobs.ineuron.ai">
                Job Portal<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://internship.ineuron.ai">
                Internship Portal<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://affiliate.ineuron.ai">
                Become an affiliate<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="https://halloffame.ineuron.ai">
                Hall of fame<span></span>
                <i></i>
              </a>
            </div>

            {/* DrawerMenu Component */}
            {drawerOpen && <DrawerMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
