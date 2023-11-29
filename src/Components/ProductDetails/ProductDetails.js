import React, { useContext } from 'react';
import './ProductDetails.css'
import { Link, useParams } from 'react-router-dom';
import FakeDataBase from '../../FakeDataBase/FakeDataBase';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons';
import { Context } from '../../App';

const ProductDetails = () => {

    //Handle add to cart

    const [cart, setCart] = useContext(Context);

    const addToCart = (product) => {

        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex === -1) {
            // If the product is not already in the cart, add it with quantity 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        else {
            // If the product is already in the cart, update its quantity
            const updatedCart = [...cart];
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: updatedCart[existingProductIndex].quantity + 1,
            };
            setCart(updatedCart);
        }
    }

    //Find the product details based on id

    const { id } = useParams();

    const product = FakeDataBase.find(pd => pd.id.toString() === id);

    if (!product) {
        // If product is not found, you can handle it here
        return <p>Product not found</p>;
    }

    return (
        <Container>
            <Row>
                <Col >
                    <Card className='product-details-card-style'>
                        <Card.Img style={{ width: '24rem', margin: 'auto' }} variant="top" src={product.url} />
                        <Card.Body>
                            <Card.Title style={{ color: 'green' }}>{product.title}</Card.Title>
                            <Card.Text>
                                {product.details}
                            </Card.Text>
                            <Card.Text>
                                <h4 style={{ color: 'red' }}>Price: $ {product.price}</h4>
                            </Card.Text>
                            <Card.Text>
                                <Button variant="success" onClick={() => addToCart(product)}> <Cart3 /> add to cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col >
            </Row>
        </Container>
    );
};

export default ProductDetails;