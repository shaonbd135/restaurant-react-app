import React from 'react';
import './Header.css'
import { Container, Row, Col, Navbar, Nav, Button, InputGroup, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Container fluid>

            <Row>
                <Col className='hero-area' sm={12} xxl={12} xl={12}>
                    {/* <Image className='banner' src="https://i.ibb.co/3y5kWz4/bannerbackground.png" /> */}
                    <div className='banner-area'>
                        <h2>The best food waiting for your belly</h2>
                        <InputGroup className="mb-3 mt-4">
                            <Form.Control placeholder="Search Food Item" />
                            <Button variant="danger" >Search </Button>
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;