import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './login.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { notification } from 'antd'; // Import notification from antd
import axios from 'axios';

const ChangePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isTokenValid, setIsTokenValid] = useState(false); // State to track token validation
    const [loading, setLoading] = useState(true); // State to manage loading state
    const navigate = useNavigate();
    const token=useParams();
    console.log(token,"token")

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    // Validation schema with Yup
    const validationSchema = Yup.object({
        newPassword: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('New Password is required'),
    });

    // Open notification modal function
    const openNotificationWithIcon = (type, message, description) => {
        notification[type]({
            message,
            description,
        });
    };

    // API call to verify the token when the component mounts
    const verifyToken = async () => {
        try {
            const response = await axios.get(`https://learningmanager-backend.onrender.com
/api/v1/verify-forgot-password/${token?.token}`);
            if (response.status === 200 ) {
                setIsTokenValid(true); // Token is valid
            } else {
                openNotificationWithIcon('error', 'Invalid Token', 'Your session has expired or the token is invalid.');
                navigate('/login'); // Redirect to login or other appropriate page
            }
        } catch (error) {
            console.error('Token verification failed:', error);
            openNotificationWithIcon('error', 'Token Verification Failed', 'Unable to verify token.');
            // navigate('/login'); // Redirect to login on failure
        } finally {
            setLoading(false); // Stop the loading spinner after the API call
        }
    };

    // Call the token verification API when the component mounts
    useEffect(() => {
        verifyToken();
    }, []);

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await axios.post('https://learningmanager-backend.onrender.com/api/v1/update-password', {
                newPassword: values.newPassword,
                token:token.token
            });

            if (response.status === 201) {
                // Show success notification
                openNotificationWithIcon('success', 'Password Changed', 'Your password has been successfully updated!');

                // Redirect to the dashboard or other page
                navigate('/');
            }
        } catch (error) {
            console.error('Password change failed:', error);

            // Show error notification
            openNotificationWithIcon('error', 'Password Change Failed', error.response?.data?.message || 'Error changing password.');
        }

        setSubmitting(false);
    };

    // Display a loading spinner or message until the token is validated
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container fluid className="login-container">
            <Row className="w-100">
                <Col lg={6} className="left-section d-none d-lg-flex">
                    <div className="welcome-box">
                        <img src="logo.png" alt="Logo" className="logo" />
                        <h1>Welcome to the Password Change Page</h1>
                    </div>
                </Col>
                <Col lg={6} className="right-section">
                    <div className="login-box">
                        <h1 style={{ textAlign: 'center' }}>Change Password</h1>

                        {isTokenValid ? (
                            <Formik
                                initialValues={{ newPassword: '' }}
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
                                        <Form.Group controlId="formNewPassword">
                                            <TextField
                                                label="New Password"
                                                type={showPassword ? 'text' : 'password'}
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                name="newPassword"
                                                value={values.newPassword}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.newPassword && Boolean(errors.newPassword)}
                                                helperText={touched.newPassword && errors.newPassword}
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

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="w-100 mt-4"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Updating Password...' : 'Change Password'}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        ) : (
                            <p>Invalid or expired token. Please login again.</p> // Show this if token is invalid
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;
