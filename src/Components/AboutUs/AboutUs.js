import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <Container className="about-us-container">
            <Row>
                <Col md={6}>
                    <img
                        src="https://i.ibb.co/Sx5hdCL/flame-grilled-meat-cooking-flames-generative-ai.jpg"
                        alt="Team or Company"
                        className="about-us-image"
                    />
                </Col>
                <Col md={6}>
                    <div className="about-us-content">
                        <h3 className="about-us-heading">About Our Restaurant</h3>
                        <p className="about-us-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="about-us-description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </Col>
            </Row>

            {/* Why Choose Us Section */}

            <div className="why-choose-us-section text-center mt-5" >
                <h2 className="section-heading">Why Choose Us?</h2>
                <Row>
                    {/* Column 1 */}
                    <Col md={4} className="why-choose-us-column">
                        <img
                            src="https://i.ibb.co/Sx5hdCL/flame-grilled-meat-cooking-flames-generative-ai.jpg" // Replace with your image
                            alt="Watch"
                            className="why-choose-us-image"
                        />
                        <p className="why-choose-us-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>

                    {/* Column 2 */}
                    <Col md={4} className="why-choose-us-column">
                        <img
                            src="https://i.ibb.co/Sx5hdCL/flame-grilled-meat-cooking-flames-generative-ai.jpg" // Replace with your image
                            alt="Watch"
                            className="why-choose-us-image"
                        />
                        <p className="why-choose-us-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>

                    {/* Column 3 */}
                    <Col md={4} className="why-choose-us-column">
                        <img
                            src="https://i.ibb.co/Sx5hdCL/flame-grilled-meat-cooking-flames-generative-ai.jpg" // Replace with your image
                            alt="Watch"
                            className="why-choose-us-image"
                        />
                        <p className="why-choose-us-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default AboutUs;