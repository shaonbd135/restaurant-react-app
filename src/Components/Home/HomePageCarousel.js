// SinglePageCarousel.js
import React, { useState } from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';

const HomePageCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Add more images as needed in the home page carousel
    const images = [
        'https://i.ibb.co/W23V32h/Green-And-White-Modern-Delicious-Food-Restaurant-Billboard-Web-Ad-2.png',
        'https://i.ibb.co/BGrrc5q/Green-And-White-Modern-Delicious-Food-Restaurant-Billboard-Web-Ad-1.png',
        'https://i.ibb.co/RcfKgRB/Black-And-Yellow-Modern-Special-Delicious-Food-Billboard-Web-Ad.png',
    ];

    return (
        <Container style={{marginTop: '30px'}} >
            <Row>
                <Col md={12} >
                    <Carousel activeIndex={index} onSelect={handleSelect} fade interval={5000}>
                        {images.map((imageUrl, idx) => (
                            <Carousel.Item key={idx}>
                                <Image
                                    src={imageUrl}
                                    alt={`Carousel Image ${idx + 1}`}
                                    className="d-block w-100"
                                    style={{ maxHeight: '300px', width: '100%' }}
                                />
                                {/* You can add a caption here if needed */}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageCarousel;
