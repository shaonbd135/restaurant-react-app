import React from 'react';
import './Header.css'
import { Container, Row, Col, Button, InputGroup, Form } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';



const Header = () => {

    return (
        <Container fluid> 
            <Row>
                <Col className='hero-area' sm={12} xxl={12} xl={12}>
                    <div className='banner-area'>
                        <h2 style={{ color: 'white' }}>The best food waiting for your belly</h2>
                        <InputGroup className="mb-3 mt-4">
                            <Form.Control name='search' placeholder="Search Food Item" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <Button variant="danger" id="button-addon2" > <Search /> Search </Button>
                        </InputGroup>
                    </div>
                </Col>               
            </Row>
        </Container>
    );
};

export default Header;


