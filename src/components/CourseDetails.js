import * as React from 'react';
import './Courses.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FaShareAlt, FaDollarSign, FaTag } from 'react-icons/fa'; // Example icons
import { MdStar } from 'react-icons/md'; // Example icons
import { CgProfile } from "react-icons/cg";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosShareAlt } from "react-icons/io";
import { FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer.js';
import { Typography } from '@mui/material';

import Courses from "../Images/courses.png"



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const copyToClipboardCourse = () => {
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

const CourseBox = ({ image, heading, paragraphs, price, priceStrikethrough, discount }) => (
  
    <div className="course-box" 
    
    >
      <img src={image} alt={heading} className="course-image" />
      <h1 className="course-heading">
        {heading} 
         {/* <IoIosShareAlt onClick={copyToClipboardCourse} className="share-icon" /> */}
      </h1>
      <div className="course-paragraphs">
        {paragraphs.map((text, idx) => (
          <p key={idx} className="course-paragraph">
            <CgProfile className="paragraph-icon" /> {text}
          </p>
        ))}
      </div>
  
      <hr style={{ width:'70%', margin:'auto', marginTop:'15px',}} />
  
      <div className="course-price-info">
        <h6 className="price">
          <FaDollarSign className="price-icon" /> {price}
        </h6>
        <p className="price-strikethrough" style={{padding:"0px 1px",marginTop:"-1px"}}>
           {priceStrikethrough}
        </p>
        <h6 className="discount">
          <RiDiscountPercentFill className="discount-icon" /> <span style={{color:'green'}}>{discount} {" "}Discount</span>
        </h6>
      </div>
      <button className="course-button">Explore</button>
    </div>
  );

const CoursesDetails = () => {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Example content for each tab
  const tabContents = {
    0: [ // Bootcamp tab
      {
        image: Courses,
        heading: 'Data Science With Gen AI ',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '6999.00',
        priceStrikethrough:'85000',
        discount: '90%'
      },
     
    ],
    1: [ 
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2022',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '5000.00',
        priceStrikethrough: '10000.00',
        discount: '50%'
      },
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2020',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '7000.00',
        priceStrikethrough: '10000.00',
        discount: '40%'
      },
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2022',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '9000.00',
        priceStrikethrough: '10000.00',
        discount: '80%'
      }
    ],
    2: [ 
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2019',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '14000.00',
        priceStrikethrough: '10000.00',
        discount: '50%'
      },
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2020',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '10000.00',
        priceStrikethrough: '10000.00',
        discount: '40%'
      },
      {
        image: 'https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fthumbnails%2F6613a058894c1923451545f2.jpg&w=384&q=75',
        heading: 'Data Science Master Pro 2014',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '56000.00',
        priceStrikethrough: '10000.00',
        discount: '30%'
      }
    ]
    
  };
  

  return (
    <>
    <Navbar/>
    
      <header className="header mt-3 d-inline" id='courses'>
      <div style={{width:"80%",margin:"auto",marginTop:"20px"}}>
      <Typography variant="body2" gutterBottom>
      {/* Home link */}
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <span role="img" aria-label="home">🏠</span> Home
      </Link>
      
      {" > "} 

      {/* Courses link */}
      <Link to="/courses/details" style={{ color: "black", textDecoration: "none" }}>
        Courses
      </Link>
      

      {/* Data Science link (stays on the same page, so no Link needed) */}
    </Typography>
    <h2 className="title">Our Courses </h2>
       <p stlye={{color:"#34495E"}}>Explore cutting-edge programs in emerging technologies designed to equip students with essential skills. Learn from experienced mentors who offer practical knowledge and valuable insights from the industry, preparing you for future opportunities.</p>

    </div>
        
        {/* <a aria-label="View All Courses" href="/courses" style={{textDecoration:'none'}}>
          <button className="view-all-button" type="link">
            View all <FaArrowRight className="arrow-icon" />
          </button>
        </a> */}
      </header>
     
      

      <Box sx={{ width: '80%',margin:'auto' }}>
        {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="course tabs">
            <Tab label="Bootcamp" {...a11yProps(0)} />
            <Tab label="Community Programs" {...a11yProps(1)} />
            <Tab label="One Neuron" {...a11yProps(2)} />
          </Tabs>
        </Box> */}
        <CustomTabPanel value={value} index={0}>
          <div className="course-container"
          onClick={()=>{
            navigate("/coursedetails")
          }}
          >
            {tabContents[0].map((content, idx) => (
              <CourseBox key={idx} {...content} />
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="course-container">
            {tabContents[1].map((content, idx) => (
              <CourseBox key={idx} {...content} />
            ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="course-container">
            {tabContents[2].map((content, idx) => (
              <CourseBox key={idx} {...content} />
            ))}
          </div>
        </CustomTabPanel>
      </Box>
      <Footer/>
    </>
  );
}

export default CoursesDetails;
