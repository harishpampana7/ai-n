import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { notification } from 'antd'; // Import notification from antd

const Login = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    // Validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    // Open notification modal function
    const openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message,
            description,
        });
    };

    // Handle form submissionlogin
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('https://learningmanager-backend.onrender.com/api/v1/login', values);
            console.log(response,"res")

            if (response.status === 201) {
                // Show success notification
                openNotificationWithIcon('success', 'Login Successful', 'You have successfully logged in!');
                localStorage.setItem("User",response?.data?.token)

                // Redirect to dashboard or other page
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error);

            // Show error notification
            openNotificationWithIcon('error', 'Login Failed', error.response.data.message);
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
                    <div className="login-box">
                        <h1 className='' style={{ textAlign: "center" }}>Sign In</h1>

                        <div className="divider">
                            <hr className="divider-line" />
                            <span className="divider-text">Or</span>
                            <hr className="divider-line" />
                        </div>

                        <Formik
                            initialValues={{ email: '', password: '' }}
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
                                    <Form.Group controlId="formEmail">
                                        <TextField
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                            InputProps={{
                                                style: { backgroundColor: 'white' },
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formPassword">
                                        <TextField
                                            label="Password"
                                            type={showPassword ? 'text' : 'password'}
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={touched.password && Boolean(errors.password)}
                                            helperText={touched.password && errors.password}
                                            InputProps={{
                                                style: { backgroundColor: 'white' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Form.Group>

                                    <Form.Group className="d-flex justify-content-between align-items-center mt-3">
                                        <Form.Check type="checkbox" label="Remember Me" />
                                        <a href="/forgot-email">Forgot Password?</a>
                                    </Form.Group>

                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="w-100 mt-4"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                                    </Button>
                                </Form>
                            )}
                        </Formik>

                        <div onClick={() => navigate("/register")}>
                            <p className="signup-text">
                                Don't have an account? <a href="/register">Sign Up</a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
