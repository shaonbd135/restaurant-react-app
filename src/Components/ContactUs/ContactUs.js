import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>

            <Container className="mt-5">
                <Row className="justify-content-md-center contact-us ">
                    <Col md={6}>
                        <h2 className="text-center mb-4 " style={{ color: 'black', backgroundColor: 'lightgray', padding: '10px', borderRadius: '10px' }}>Contact Us</h2>
                        <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                            <Form.Group controlId="formName">
                                <Form.Label className="text-secondary">Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mb-3"
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label className="text-secondary">Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    className="mb-3"
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label className="text-secondary">Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                    className="mb-3"
                                />
                            </Form.Group>
                            <div className="text-center">
                            <Button variant="success" type="submit">
                                Submit
                            </Button>

                            </div>

                            
                        </Form>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default ContactUs;