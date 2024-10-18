import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './login.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EmailRegister = () => {
    const [apiResponse, setApiResponse] = useState(null); // To track the API response
    const [loading, setLoading] = useState(true); // To show loading state
    const navigate = useNavigate();
    const token=useParams()
    console.log(token,"token")

    useEffect(() => {
        // Simulate getting token from sessionStorage or URL params

        // Call the API when the component mounts
        const verifyEmail = async () => {
            try {
                const response = await axios.get(`https://learningmanager-backend.onrender.com
/api/v1/verify-email/${token?.token}`);
                console.log(response,"token")
                // Set the API response to show success message
                setApiResponse(response.data);
                setLoading(false);

                // If successful, redirect to login page after 2 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } catch (error) {
                console.error('Email verification failed:', error);
                setLoading(false); // Stop loading even on failure
            }
        };

        verifyEmail();
    }, [navigate]);

    return (
        <Container fluid className="login-container">
            <Row className='w-100'>
                <Col lg={6} className="left-section d-none d-lg-flex">
                    <div className="welcome-box">
                        <img src="logo.png" alt="iNeuron Logo" className="logo" />
                        <h1>Hey There, Welcome!</h1>
                        <p>We are iNeuron Technology</p>
                        <blockquote>
                            <p>
                                "All our talents increase in the using, and every faculty, both
                                good and bad, strengthen by exercise."
                            </p>
                            <footer>- Anne Brontë</footer>
                        </blockquote>
                    </div>
                </Col>

                <Col lg={6} className="right-section">
                    <div className="verification-box">
                        {loading ? (
                            <p>Verifying your email, please wait...</p>
                        ) : (
                            apiResponse ? (
                                <div className="success-message">
                                    {/* Show an illustration and success message */}
                                    <img src="success-illustration.png" alt="Success" className="success-img" />
                                    <h2>Your account has been successfully verified!</h2>
                                    <p>Redirecting you to the login page...</p>
                                </div>
                            ) : (
                                <p>Something went wrong. Please try again later.</p>
                            )
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default EmailRegister;
