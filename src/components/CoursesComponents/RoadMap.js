import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBook, FaLaptop, FaChalkboardTeacher, FaChartBar, FaBriefcase, FaVideo, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { Typography } from '@mui/material';

const Roadmap = () => {
  return (
    <Container className="mt-5 w-80">
           <Typography variant="h5" align="left" gutterBottom>
        <span style={{ borderLeft: '4px solid #203864', paddingLeft: '8px' }}>        The Roadmap To Success
        </span>
      </Typography>
   

      {/* First Row with icons aligned left and padding between icons and text */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="shadow-sm" style={{ height: '100px', border: '1px solid #dbdce0' }}>
            <Card.Body className="d-flex align-items-center justify-content-start">
              <FaBook style={{ fontSize: 40, color: '#FF6F61', marginRight: '15px' }} />
              <Card.Title className="mb-0" style={{ fontWeight: 600, fontSize: '0.85rem', color: '#000' }}>
                Course Resources
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm" style={{ height: '100px', border: '1px solid #dbdce0' }}>
            <Card.Body className="d-flex align-items-center justify-content-start">
              <FaLaptop style={{ fontSize: 40, color: '#4CAF50', marginRight: '15px' }} />
              <Card.Title className="mb-0" style={{ fontWeight: 600, fontSize: '0.85rem', color: '#000' }}>
              Live Instructor 
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm" style={{ height: '100px', border: '1px solid #dbdce0' }}>
            <Card.Body className="d-flex align-items-center justify-content-start">
              <FaChalkboardTeacher style={{ fontSize: 40, color: '#2196F3', marginRight: '15px' }} />
              <Card.Title className="mb-0" style={{ fontWeight: 600, fontSize: '0.85rem', color: '#000' }}>
              Hands-on Learning
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm" style={{ height: '100px', border: '1px solid #dbdce0' }}>
            <Card.Body className="d-flex align-items-center justify-content-start">
              <FaChartBar style={{ fontSize: 40, color: '#FFB300', marginRight: '15px' }} />
              <Card.Title className="mb-0" style={{ fontWeight: 600, fontSize: '0.85rem', color: '#000' }}>
              Assessment in all modules
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Row */}
      <Row className='mt-8' style={{marginTop:"60px"}}>
        <Col md={3} >
          <Card className="shadow-sm text-center" style={{ border: '1px solid #dbdce0' }}>
            <Card.Body>
              <FaBriefcase style={{ fontSize: 50, color: '#FFC107' }} />
              <Card.Title className="mt-3">Roles After Completion</Card.Title>
              <Card.Text>Data Scientist,AI Engieer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center" style={{ border: '1px solid #dbdce0' }}>
            <Card.Body>
              <FaVideo style={{ fontSize: 50, color: '#8BC34A' }} />
              <Card.Title className="mt-3">Learning Mode</Card.Title>
              <Card.Text>Online</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center" style={{ border: '1px solid #dbdce0' }}>
            <Card.Body>
              <FaLightbulb style={{ fontSize: 50, color: '#FF4081' }} />
              <Card.Title className="mt-3">Skills You Will Gain</Card.Title>
              <Card.Text>Python,Flask,ML,DL,NLP,Gen AI</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="shadow-sm text-center" style={{ border: '1px solid #dbdce0' }}>
            <Card.Body>
              <FaCheckCircle style={{ fontSize: 50, color: '#03A9F4' }} />
              <Card.Title className="mt-3">Minimum Eligibility</Card.Title>
              <Card.Text>Anyone</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Roadmap;
