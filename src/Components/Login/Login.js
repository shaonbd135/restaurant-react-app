import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Google, Instagram, Twitter } from "react-bootstrap-icons";
import './Login.css';

const Login = () => {

    const signUpBtn = () => {
        const container = document.querySelector('.login-container');
        container.classList.add('active');
    }

    const signInBtn = () => {
        const container = document.querySelector('.login-container');
        container.classList.remove('active');
    }


    return (
        <Container fluid >
            <Row>

                <Col className='login-body'>
                    <div className='login-container' id='container'>
                        <div className='form-container sign-up'>

                            <form>
                                <h1>Create Account</h1>
                                <div className='social-icons'>
                                    <a href="#" className='icon'> <Google /></a>
                                    <a href="#" className='icon'> <Facebook /></a>
                                    <a href="#" className='icon'> <Instagram /></a>
                                    <a href="#" className='icon'> <Twitter /></a>
                                </div>
                                <span>or use your email for registration</span>
                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Email' />
                                <input type="text" placeholder='Password' />
                                <button>Sign Up</button>
                            </form>

                        </div>
                        <div className='form-container sign-in'>

                            <form>
                                <h1>Sign In</h1>
                                <div className='social-icons'>
                                    <a href="#" className='icon'> <Google /></a>
                                    <a href="#" className='icon'> <Facebook /></a>
                                    <a href="#" className='icon'> <Instagram /></a>
                                    <a href="#" className='icon'> <Twitter /></a>
                                </div>
                                <span>or use your email and password for sign in</span>
                                <input type="text" placeholder='Email' />
                                <input type="text" placeholder='Password' />
                                <a href="#">Forget Your Password?</a>
                                <button >Sign in</button>
                            </form>

                        </div>
                        <div className="toggle-container">

                            <div className="toggle">
                                <div className="toggle-panel toggle-left">
                                    <h1>Welcome Back!</h1>
                                    <p>To keep connected with us please login with your personal info</p>
                                    <button className="hidden" onClick={signInBtn} >Sign In</button>

                                </div>
                                <div className="toggle-panel toggle-right">
                                    <h1>Hello!</h1>
                                    <p>Enter your personal details and start journey with us</p>
                                    <button className="hidden" onClick={signUpBtn} >Sign Up</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </Col>

            </Row>
        </Container>
    );
};

export default Login;