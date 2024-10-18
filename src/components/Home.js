import React from 'react'
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection';
import Courses from './Courses';
import Faqs from './Faqs';
import Footer from './Footer';
import Choose from './Choose';
import { Container } from '@mui/material';
import HiringData from './HiringData';

const Home = () => {
  return (
    <>

    <Navbar />
    
    <HeroSection />

    <Courses  />
    <Choose/>
    <HiringData/>

    <Faqs />

    <Footer />
    
    </>
  )
}

export default Home;