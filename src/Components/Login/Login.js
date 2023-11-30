import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [signupFormData, setSignupFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const [signinFormData, setSigninFormData] = useState({
        email: '',
        password: '',
    });

    const handleSignupChange = (e) => {
        setSignupFormData({
            ...signupFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSigninChange = (e) => {
        setSigninFormData({
            ...signinFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        //You can Add your signup logic here
        console.log('Signup Form submitted:', signupFormData);
    };

    const handleSigninSubmit = (e) => {
        e.preventDefault();
        // You can Add your signin logic here
        console.log('Signin Form submitted:', signinFormData);
    };

    return (
        <div className='login-body'>

            <Container className="py-5">
                <Row className='m-auto'>
                    <Col md={6} className="mb-4">
                        <div className="bg-light p-4 rounded signup-style">
                            <h2 className="mb-4">Sign Up</h2>
                            <Form onSubmit={handleSignupSubmit}>
                                <Form.Group controlId="fullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        value={signupFormData.fullName}
                                        onChange={handleSignupChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={signupFormData.email}
                                        onChange={handleSignupChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={signupFormData.password}
                                        onChange={handleSignupChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="success" className="mt-3" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </div>
                    </Col>

                    <Col md={6} className="mb-4">
                        <div className="bg-light p-4 rounded signin-style">
                            <h2 className="mb-4">Sign In</h2>
                            <Form onSubmit={handleSigninSubmit}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={signinFormData.email}
                                        onChange={handleSigninChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={signinFormData.password}
                                        onChange={handleSigninChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit" className="mt-3">
                                    Sign In
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
