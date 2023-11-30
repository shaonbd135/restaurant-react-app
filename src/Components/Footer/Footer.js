import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4" style={{ backgroundColor: 'black', color: 'white' }}>
            <Container >
                <Row>
                    <Col md={6} className="mt-md-0 mt-3">
                        {/* <!-- Footer Logo here --> */}
                        <img className='footer-logo' src="https://i.ibb.co/bBK2g34/Abstract-Chef-Cooking-Restaurant-Free-Logo-1.png" alt="" />
                        <h5 className="text-uppercase">Your Restaurant</h5>
                        <p>1300th Street. 4700 W 1300th St, New York, NY 1000011, USA</p>
                    </Col>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <Col md={3} mb-md-0 mb-3>
                        <h5 className="text-uppercase">Quick Links</h5>
                        <ul>
                            <li > <Link className='list-unstyled' to="/">Home</Link></li>
                            <li > <Link className='list-unstyled' to="/about-us">About Us</Link></li>
                            <li > <Link className='list-unstyled' to="/contact-us">Contact Us</Link></li>
                            <li > <Link className='list-unstyled' to="/shop">Shop</Link></li>
                        </ul>

                    </Col>

                    <Col md={3} mb-md-0 mb-3>
                        <h5 className="text-uppercase">Promotional Newsletter</h5>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Enter Your Email"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="success" id="button-addon2">
                                Submit
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>

            <div className="footer-copyright text-center py-3">© 2023 Copyright:</div>
        </footer>
    );
};

export default Footer;
