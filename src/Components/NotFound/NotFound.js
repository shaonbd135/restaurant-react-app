import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigator = useNavigate();
    return (

        <Card style={{ width: '30rem' }} className="text-center m-auto mt-5">
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" />
            <Card.Header>404 Error</Card.Header>
            <Card.Body>
                <Card.Title style={{ color: 'red' }}>Page Not Found</Card.Title>
                <Card.Text>
                    This link you are looking for is not found, or it may have been removed.
                </Card.Text>
                <Button variant="danger" onClick={() => navigator('/')} >Go to Home</Button>
            </Card.Body>
        </Card>
    );
};

export default NotFound;