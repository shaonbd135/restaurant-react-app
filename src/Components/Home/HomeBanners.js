import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './HomeBanners.css'

const HomeBanners = () => {
    return (
        <Container className='cover-container'>
            <Row>
                <Col md={12} >
                    {/* You can change bottom banner image here */}
                    <Image className='cover-image' src="https://i.ibb.co/bJZjtts/Green-And-White-Modern-Delicious-Food-Restaurant-Billboard-Web-Ad-3.png"></Image> 
                </Col>               
            </Row>
        </Container>
    );
};

export default HomeBanners;


