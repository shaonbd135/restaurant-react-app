import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { Cart3 } from "react-bootstrap-icons";
import { Context } from '../../App';

const NavHero = () => {

    //make navbar sticky

    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //................................//

    const navigator = useNavigate();

    //handle cart using context
    const [cart, setCart] = useContext(Context);

    return (
        <Container fluid  >
            <Row >
                <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#FFFEFA', position: isSticky ? 'fixed' : 'relative', top: 0, width: '100%', zIndex: 1000 }}  >
                    <Container fluid >

                        {/* it's a logo on the left side of the navbar, you can change it to your logo */}
                        <img className='logo' src="https://i.ibb.co/tsvcp1y/logo2.png" alt="" />

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto" >

                                {/* it's a navbar links on the left side of the navbar */}

                                <Nav.Link > <NavLink className='nav-link' to='/'> Home</NavLink> </Nav.Link>
                                <Nav.Link > <NavLink className='nav-link' to='about-us'> About Us</NavLink> </Nav.Link>
                                <Nav.Link > <NavLink className='nav-link' to='contact-us'> Contact Us</NavLink> </Nav.Link>
                            </Nav>
                            <Nav>
                                {/* it's a cart icon (Bootstrap Icons) with badge on the right side of the navbar */}

                                <Button onClick={() => navigator('/cart')} variant=''> <Cart3 /> <Badge bg="danger">{cart.length}</Badge> </Button>

                                {cart.length > 0 && <Nav.Link style={{ marginRight: '15px' }} ><NavLink to='/cart' style={{ textDecoration: 'none', color: 'black' }}>Go to Cart</NavLink></Nav.Link>}
                                {/* it's a login and sign up button on the right side of the navbar */}

                                <Nav.Link style={{ marginRight: '15px' }} ><NavLink to='/login' style={{ textDecoration: 'none', color: 'black' }}> Login</NavLink></Nav.Link>
                                <Button className='signUpBtn' variant="danger"><NavLink to='/login' style={{ textDecoration: 'none', color: 'white' }}> Sign Up</NavLink></Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    );
};

export default NavHero;