import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigator = useNavigate();
    return (

        <div style={{ minHeight: '100vh' }}>
            <Card style={{ width: '30rem' }} className="text-center m-auto mt-5">
                <Card.Img variant="top" src="https://i.ibb.co/SybKLyP/3828541.jpg" /> {/* You can change image here for page not found */}
                <Card.Header>404 Error</Card.Header>
                <Card.Body>
                    <Card.Title style={{ color: 'red' }}>Page Not Found</Card.Title>
                    <Card.Text>
                        This link you are looking for is not found, or it may have been removed.
                    </Card.Text>
                    <Button variant="danger" onClick={() => navigator('/')} >Go to Home</Button>
                </Card.Body>
            </Card>

        </div>


    );
};

export default NotFound;