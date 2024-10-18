import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './components/Home';
import HeroSection from './components/HeroSection';
import Courses from './components/Courses';
import Faqs from './components/Faqs';
import DataSciencePage from './components/CoursesData';
import CourseIntro from './components/CoursesComponents/CourseIntro';
import CourseDetails from './components/CoursesComponents/CourseDetails';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import CoursesDetails from './components/CourseDetails';
import EmailRegister from './components/EmailRegister';
import ForgotEmail from './components/ForgotEmail';
import ForgotPassword from './components/ForgotPassword';
import AboutUs from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';


function App() {
  return (
    <React.Fragment>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/courses/details" element={<CoursesDetails/>}/>
        <Route path="/api/v1/verify-email/:token" element={<EmailRegister/>}/>
        <Route path="/forgot-email" element={<ForgotEmail/>}/>
        <Route path="/api/v1/verify-reset-token/:token" element={<ForgotPassword/>}/>
        <Route path="/About" element={<AboutUs/>}/>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}/>

        

        <Route path="/" element={<CourseIntro />} />
        <Route path="/coursedetails" element={<CourseDetails />} />

        </Routes>
    </React.Fragment>
  );
}

export default App;
