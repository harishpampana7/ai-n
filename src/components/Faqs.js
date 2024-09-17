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
      <header className="header">
        <h2 className="title">Frequently Asked Questions</h2>
        <a aria-label="View All Courses" href="/courses" style={{ textDecoration: 'none' }}>
          <button className="view-all-button">
            View all <FaArrowRight className="arrow-icon" />
          </button>
        </a>
      </header>

      <div className="faqs-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h3>What is the purpose of this FAQ section?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <h3>How do I get started?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <h3>Do you offer customer support?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Faqs;
