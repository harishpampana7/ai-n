import React from 'react';
import './Faqs.css';
import { FaArrowRight } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {
  return (
    <>
      <header className="header mt-3" style={{marginTop:"40px",}}>
        <h2 className="title"  style={{color:"black",fontSize:"32px",color:"#34495E"}}>Frequently Asked Questions</h2>
        {/* <a aria-label="View All Courses" href="#" style={{ textDecoration: 'none' }}>
          <button className="view-all-button" style={{border:"none",boxShadow:"none"}}>
            View all <FaArrowRight className="arrow-icon" />
          </button>
        </a> */}
      </header>

      <div className="faqs-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h5 style={{color:"#34495E",fontSize:"16px",fontWeight:"600"}}>Who are these courses suitable for ?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p style={{color:"#34495E"}}>Our programs are suitable for everyone, no matter your background—whether you’re from tech or a non-tech field. Each course starts with the basics and gradually moves to more advanced topics, making them easy for anyone to understand.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Will these courses make me job-ready?
            </h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>Yes! Our curriculum is designed to match current industry trends and is taught by professionals. This ensures you gain the essential insights and knowledge needed to become a strong candidate in the job market.?
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Are internships provided?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>Yes, we offer internships, and you’ll receive an experience letter when you complete them. These internships include real projects that follow actual industry practices, giving you a clear understanding of how things work in the real world.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Are the classes recorded or live?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>Our classes are live, and you will have access to the recordings in your dashboard within 24 hours after each session, allowing you to review the material at your convenience.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>What if I miss a class??</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>If you miss a class, don’t worry! All sessions are recorded and will be uploaded to your dashboard within 24 hours, so you can catch up at your convenience.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h5 style={{color:"#393B43",fontSize:"16px",fontWeight:"600"}}>Are internships provided?</h5>
          </AccordionSummary>
          <AccordionDetails>
            <p>Yes, we offer internships, and you’ll receive an experience letter when you complete them. These internships include real projects that follow actual industry practices, giving you a clear understanding of how things work in the real world.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
