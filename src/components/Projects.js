import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./Projects.css"


const Projects = () => {
  return (
    <Container>
      <h2 className="my-4">Projects</h2>
      <Row>
        {/* First grid (7 columns wide) */}
        <Col md={8}>
          {/* Large card at the top */}
          <Card className="mb-4">
            <Card.Img variant="top" className='img-project' src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a943894c1953811549bf.png&w=640&q=75" alt="Medical Chatbot Project" />
            <Card.Body>
              <Card.Title>Medical Chatbot Project with Llama 2, Pinecone, LangChain & Deployment AWS</Card.Title>
              <Card.Text>
                Embark on a revolutionary journey with our Medical Chatbot Project! Utilizing cutting-edge technologies
                like Llama 2, Pinecone, and LangChain, we bring you a seamless chatbot experience. Deployed on AWS for
                maximum accessibility and scalability.
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Two smaller cards side by side inside the 7-column grid */}
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img variant="top" className='img-project' src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9c7894c1905261549e8.png&w=256&q=75" alt="Image generation with DALL-E" />
                <Card.Body>
                  <Card.Title>Image generation with DALL-E</Card.Title>
                  <Card.Text>Create unique images with DALL-E AI.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <Card.Img variant="top"  className='img-project' src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9fa894c19296d154a09.png&w=256&q=75" alt="Auto Recruiter" />
                <Card.Body>
                  <Card.Title>Auto Recruiter</Card.Title>
                  <Card.Text>Auto Recruiter: Streamline the hiring process.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Second grid (5 columns wide) */}
        <Col md={4}>
          <Card className="mb-4 h-100">
                <Card.Img variant="top" className='img-project' src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a98a894c19ba9b1549c7.png&w=384&q=75" alt="Image generation with DALL-E" />
            <Card.Body>
              <Card.Title>Telegram bot using OpenAI API with GPT-3.5 turbo</Card.Title>
              <Card.Text>
                Revolutionize communication with our Telegram bot powered by OpenAI API featuring GPT-3.5 turbo for
                unparalleled conversational experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
