import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ForgotEmail = () => {
    const [notification, setNotification] = useState({ show: false, message: '', variant: '' });
    const navigate = useNavigate();

    // Validation schema using Yup
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    // Form submission handler
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Call the forgot email API
            const response = await axios.post('https://learningmanager-backend.onrender.com/api/v1/forgot-password', { email: values.email });

            // Check if the status is 201 (Created)
            if (response.status === 200) {
                // Show success notification
                setNotification({
                    show: true,
                    message: 'A link has been sent to your email. Please click on the link to reset your email.',
                    variant: 'success',
                });

                // Reset form fields
                resetForm();
            } else {
                // Handle other status codes
                setNotification({
                    show: true,
                    message: 'Unexpected response from the server.',
                    variant: 'warning',
                });
            }
        } catch (error) {
            // Log the full error for debugging purposes
            console.error('Request failed:', error.response?.data?.message);

            // Show error notification
            setNotification({
                show: true,
                message: error.response?.data?.message || 'Failed to send the reset link.',
                variant: 'danger',
            });
        }

        setSubmitting(false);
    };

    return (
        <Container fluid className="login-container">
            <Row className='w-100'>
                <Col lg={6} className="left-section d-none d-lg-flex">
                    <div className="welcome-box">
                        <img src="logo.png" alt="iNeuron Logo" className="logo" />
                        <h1>Forgot Email?</h1>
                        <p>Please enter your email to receive a reset link</p>
                    </div>
                </Col>
                <Col lg={6} className="right-section">
                    <div className="login-box">
                        <h2 className='' style={{ textAlign: "center" }}>Forgot Email</h2>

                        {/* Notification */}
                        {notification.show && (
                            <Alert variant={notification.variant} onClose={() => setNotification({ show: false })} dismissible>
                                {notification.message}
                            </Alert>
                        )}

                        <Formik
                            initialValues={{ email: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        margin="normal"
                                        variant="outlined"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />

                                    <Button
                                        className="w-100"
                                        variant="primary"
                                        size="lg"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Sending Link...' : 'Next'}
                                    </Button>

                                    <div className="text-center mt-3">
                                        <a href="/login">Back to Sign In</a>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotEmail;
