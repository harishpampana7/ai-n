import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects" data-title="Projects" className="projects-c--section">
      <div className="projects-c--container">
        <div className="projects-c--header">
          <header className="projects-c--header-content">
            <div className="projects-c--sidebar-indicator"></div>
            <h3 className="projects-c--title">Projects</h3>
          </header>
        </div>
        <div className="projects-c--grid-container">
          <div className="projects-c--project-item-large">
            <img
              alt="Medical Chatbot Project with Llama 2, Pinecone, LangChain & Deployment AWS"
              // srcSet="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a943894c1953811549bf.png&amp;w=640&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a943894c1953811549bf.png&amp;w=828&amp;q=75 2x"
src="https://ineuron.ai/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a943894c1953811549bf.png&w=640&q=75"
              className="projects-c--image"
            />
            <div className="projects-c--project-info">
              <h6 className="projects-c--project-title">Medical Chatbot Project with Llama 2, Pinecone, LangChain & Deployment AWS</h6>
              <p className="projects-c--project-description">Embark on a revolutionary journey with our Medical Chatbot Project! Utilizing cutting-edge technologies like Llama 2, Pinecone, and LangChain, we bring you a seamless chatbot experience. Deployed on AWS for maximum accessibility and scalability.</p>
            </div>
          </div>
          <div className="projects-c--project-item-small">
            <img
              alt="Telegram bot using OpenAI API with GPT-3.5 turbo"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a98a894c19ba9b1549c7.png&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a98a894c19ba9b1549c7.png&amp;w=750&amp;q=75 2x"
              src="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a98a894c19ba9b1549c7.png&amp;w=750&amp;q=75"
              className="projects-c--image"
            />
            <div className="projects-c--project-info">
              <h6 className="projects-c--project-title">Telegram bot using OpenAI API with GPT-3.5 turbo</h6>
              <p className="projects-c--project-description">Revolutionize communication with our Telegram bot powered by OpenAI API featuring GPT-3.5 turbo for unparalleled conversational experiences.</p>
            </div>
          </div>
          <div className="projects-c--project-item-small">
            <img
              alt="Image generation with DALL-E"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9c7894c1905261549e8.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9c7894c1905261549e8.png&amp;w=384&amp;q=75 2x"
              src="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9c7894c1905261549e8.png&amp;w=384&amp;q=75"
              className="projects-c--image"
            />
            <div className="projects-c--project-info">
              <h6 className="projects-c--project-title">Image generation with DALL-E</h6>
              <p className="projects-c--project-description">Create unique images with DALL-E AI.</p>
            </div>
          </div>
          <div className="projects-c--project-item-small">
            <img
              alt="Auto Recruiter"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9fa894c19296d154a09.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9fa894c19296d154a09.png&amp;w=384&amp;q=75 2x"
              src="/_next/image?url=https%3A%2F%2Fcdn.ineuron.ai%2Fassets%2Fuploads%2Fproject_gallery%2F6613a9fa894c19296d154a09.png&amp;w=384&amp;q=75"
              className="projects-c--image"
            />
            <div className="projects-c--project-info">
              <h6 className="projects-c--project-title">Auto Recruiter</h6>
              <p className="projects-c--project-description">Auto Recruiter: Streamline the hiring process.</p>
            </div>
          </div>
        </div>
        <div className="projects-c--carousel-controls">
          <div className="projects-c--left-arrow">
            <svg className="projects-c--arrow-icon" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M328 112L184 256L328 400" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <div className="projects-c--right-arrow">
            <svg className="projects-c--arrow-icon" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M184 112L328 256L184 400" stroke="currentColor" strokeWidth="48" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
