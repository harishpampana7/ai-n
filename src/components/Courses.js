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

const CourseBox = ({ image, heading, paragraphs, price, priceStrikethrough, discount }) => (
  <div className="course-box">
    <img src={image} alt={heading} className="course-image" />
    <h1 className="course-heading">
      {heading} <IoIosShareAlt className="share-icon" />
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
      <h5 className="price">
        <FaDollarSign className="price-icon" /> {price}
      </h5>
      <h5 className="price-strikethrough">
         {priceStrikethrough}
      </h5>
      <h5 className="discount">
        <RiDiscountPercentFill className="discount-icon" /> <span style={{color:'green'}}>{discount} {" "}Discount</span>
      </h5>
    </div>
    <button className="course-button">Explore</button>
  </div>
);

const Courses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Example content for each tab
  const tabContents = {
    0: [ // Bootcamp tab
      {
        image: './images/Courses--01.png',
        heading: 'Data Science Master Pro 2024',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '8000.00',
        priceStrikethrough: '10000.00',
        discount: '20%'
      },
      {
        image: './images/Courses--02.png',
        heading: 'Data Science Master Pro 2021',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '8000.00',
        priceStrikethrough: '10000.00',
        discount: '70%'
      },
      {
        image: './images/Courses--01.png',
        heading: 'Data Science Master Pro 2023',
        paragraphs: [
          'Detailed explanation of Data Science Master Pro 2024.',
          'Key features of Data Science Master Pro 2024.',
          'college students & Working Professional'
        ],
        price: '8000.00',
        priceStrikethrough: '10000.00',
        discount: '50%'
      }
    ],
    1: [ 
      {
        image: './images/Courses--01.png',
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
        image: './images/Courses--01.png',
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
        image: './images/Courses--02.png',
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
        image: './images/Courses--02.png',
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
        image: './images/Courses--01.png',
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
        image: './images/Courses--02.png',
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
      <header className="header" id='courses'>
        <h2 className="title">Our Courses</h2>
        <a aria-label="View All Courses" href="/courses" style={{textDecoration:'none'}}>
          <button className="view-all-button">
            View all <FaArrowRight className="arrow-icon" />
          </button>
        </a>
      </header>

      <Box sx={{ width: '80%',margin:'auto' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="course tabs">
            <Tab label="Bootcamp" {...a11yProps(0)} />
            <Tab label="Community Programs" {...a11yProps(1)} />
            <Tab label="One Neuron" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="course-container">
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
    </>
  );
}

export default Courses;
