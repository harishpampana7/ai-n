import React, { useState } from "react";
import "./Navbar.css";
import DrawerMenu from "./DrawerMenu";
import Logo from "../../Images/Logo.png";
import {jwtDecode} from "jwt-decode"; 
import { useNavigate } from "react-router-dom";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Retrieve token from localStorage
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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const Logout=()=>{
    localStorage.removeItem("user")
    navigate("/login")
    handleMenuClose()
  }

  return (
    <>
      <nav className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-inner">
            <div className="navbar-top">
              {/* Logo */}
              <a className="navbar-logo" href="/">
                <img src={Logo} alt="logo" />
              </a>

              <div className="side">
                <DrawerMenu isOpen={drawerOpen} onToggle={toggleDrawer} />
              </div>

              {/* Search Bar */}
              <div className="navbar-search">
                <svg
                  className="search-icon"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M464 428L339.92 303.9C359.916 276.421 370.673 243.304 370.64 209.32C370.64 120.37 298.27 48 209.32 48C120.37 48 48 120.37 48 209.32C48 298.27 120.37 370.64 209.32 370.64C243.304 370.673 276.421 359.916 303.9 339.92L428 464L464 428ZM209.32 319.69C187.488 319.692 166.146 313.22 147.992 301.092C129.839 288.964 115.69 271.725 107.334 251.555C98.9785 231.385 96.7917 209.191 101.05 187.778C105.309 166.366 115.822 146.697 131.26 131.26C146.697 115.822 166.366 105.309 187.778 101.05C209.191 96.7917 231.385 98.9785 251.555 107.334C271.725 115.69 288.964 129.839 301.092 147.992C313.22 166.146 319.692 187.488 319.69 209.32C319.656 238.581 308.016 266.634 287.325 287.325C266.634 308.016 238.581 319.656 209.32 319.69Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by product title"
                  value=""
                  onChange={() => {}}
                />
              </div>

              {/* Login/Register Button or User Icon */}
              {user ? (
                <div className="show-value">
                  <IconButton edge="end" color="black" aria-label="menu" onClick={handleMenuClick}>
                    <Typography variant="h5" style={{fontWeight:700,color:"black"}}>{firstLetter}</Typography>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>My Courses</MenuItem>
                    <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
                    <MenuItem onClick={Logout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                <button
                  className="navbar-login-btn"
                  onClick={() => {
                    navigate("/Login");
                  }}
                >
                  Login / Register
                </button>
              )}
            </div>

            {/* Bottom Section: Navigation Links */}
            <div className="navbar-links">
              <a className="navbar-link navbar-link-courses" href="/courses/details">
                Courses
                <i></i>
              </a>
              <a className="navbar-link" href="">
                Lab<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="">
                Internship Portal<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="">
                Mock-Interviews<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="">
                Blog<span></span>
                <i></i>
              </a>
              <a className="navbar-link" href="/About">
                Company<span></span>
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
