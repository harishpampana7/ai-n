import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import Faqs from './components/Faqs';
import DataSciencePage from './components/CoursesData';

function App() {
  return (
    <React.Fragment>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/courses-details" element={<DataSciencePage/>}/>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}

        </Routes>
    </React.Fragment>
  );
}

export default App;
