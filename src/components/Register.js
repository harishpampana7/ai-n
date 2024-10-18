import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './login.css';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', variant: '' });
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    // Validation schema using Yup
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // Form submission handler
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Call the registration API
            const response = await axios.post('https://learningmanager-backend.onrender.com/api/v1/signup', values);

            // Check if the status is 201 (Created)
            if (response.status === 201) {
                // Assuming the token is part of the response
                const token = response.data.token;

                // Store token in sessionStorage
                sessionStorage.setItem('authToken', token);

                // Show success notification
                setNotification({
                    show: true,
                    message: 'Your account has been successfully registered! Please click the link sent to your email to verify your account.',
                    variant: 'success',
                });

                // Reset form fields
                resetForm();

                // Navigate to the verification page with the token in the URL after a short delay
              
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
            console.error('Registration failed:', error.response?.data?.message );

            // Show error notification
            setNotification({
                show: true,
                message: error.response?.data?.message,
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
                        <h1>Hey There, Welcome!</h1>
                        <p>We are iNeuron Technology</p>
                    </div>
                </Col>
                <Col lg={6} className="right-section">
                    <div className="login-box">
                        <h2 className='' style={{ textAlign: "center" }}>Sign Up</h2>

                        {/* Notification */}
                        {notification.show && (
                            <Alert variant={notification.variant} onClose={() => setNotification({ show: false })} dismissible>
                                {notification.message}
                            </Alert>
                        )}

                        <Formik
                            initialValues={{
                                firstName: '',
                                lastName: '',
                                email: '',
                                phoneNumber: '',
                                password: '',
                            }}
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
                                    <Row>
                                        <Col md={6}>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                margin="normal"
                                                variant="outlined"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.firstName && Boolean(errors.firstName)}
                                                helperText={touched.firstName && errors.firstName}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                margin="normal"
                                                variant="outlined"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.lastName && Boolean(errors.lastName)}
                                                helperText={touched.lastName && errors.lastName}
                                            />
                                        </Col>
                                    </Row>
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
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        margin="normal"
                                        variant="outlined"
                                        name="phoneNumber"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                                        helperText={touched.phoneNumber && errors.phoneNumber}
                                        InputProps={{
                                            startAdornment: (
                                                <span className="mr-2" style={{ fontSize: '1.2em' }}>+91</span>
                                            ),
                                        }}
                                    />
                                    <Row>
                                        <Col md={12}>
                                            <TextField
                                                fullWidth
                                                label="Create Password"
                                                type="password"
                                                margin="normal"
                                                variant="outlined"
                                                name="password"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.password && Boolean(errors.password)}
                                                helperText={touched.password && errors.password}
                                            />
                                        </Col>
                                    </Row>

                                    <Button
                                        className="w-100"
                                        variant="primary"
                                        size="lg"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                    </Button>

                                    <div className="text-center mt-3">
                                        Already have an account? <a href="/login">Sign In</a>
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

export default Register;
