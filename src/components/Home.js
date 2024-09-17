import React from 'react'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection';
import Courses from './Courses';
import Faqs from './Faqs';
import Footer from './Footer';

const Home = () => {
  return (
    <>

    <Navbar />
    
    <HeroSection />

    <Courses  />

    <Faqs />

    <Footer />
    
    </>
  )
}

export default Home;