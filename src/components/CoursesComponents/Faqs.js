import React from 'react';
import '../Faqs.css';
import { FaArrowRight } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

const Faqs = () => {
  return (
    <>
      <header className="header w-100 " style={{marginTop:"70px"}}>
      <Typography variant="h5" align="left" gutterBottom>
        <span style={{ borderLeft: '4px solid #203864', paddingLeft: '8px',color:"#34495E" }}>Frequently Asked Questions</span>
      </Typography>
        {/* <a aria-label="View All Courses" href="#" style={{ textDecoration: 'none' }}>
          <button className="view-all-button" style={{border:"none",boxShadow:"none"}}>
            View all <FaArrowRight className="arrow-icon" />
          </button>
        </a> */}
      </header>

      <div className="faqs-container w-100 mt-3">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>What is the duration of the course ?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>The duration of the course is for 3-4 months.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Is the course live or recorded  ?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>The course will be live.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>What if I miss the class ?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>All sessions are recorded and available on your dashboard within 24 hours of the live classes.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Does the course start from the basics?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>Yes every course starts from the very basics.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Do you offer an internship after the course?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>yes we offer internship after the completion of the course .</p>
          </AccordionDetails>
        </Accordion>
        
      </div>
    </>
  );
};

export default Faqs;
