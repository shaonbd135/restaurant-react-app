import React from 'react';
import { Badge, Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { Cart3 } from "react-bootstrap-icons";

const NavHero = () => {
    const navigator = useNavigate();
    return (
        <Container fluid>
            <Row>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container fluid >
                        <img className='logo' src="https://i.ibb.co/tsvcp1y/logo2.png" alt="" />
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link > <NavLink className='nav-link' to='/'> Home</NavLink> </Nav.Link>
                                <Nav.Link > <NavLink className='nav-link' to='about-us'> About Us</NavLink> </Nav.Link>
                                <Nav.Link > <NavLink className='nav-link' to='contact-us'> Contact Us</NavLink> </Nav.Link>
                            </Nav>
                            <Nav>
                                <Button onClick={() => navigator('/cart')} variant=''> <Cart3 /> <Badge bg="danger">9</Badge> </Button>

                                <Nav.Link style={{ marginRight: '15px' }} ><NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }}> Login</NavLink></Nav.Link>
                                <Button className='signUpBtn' variant="danger">Sign Up</Button>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};

export default NavHero;