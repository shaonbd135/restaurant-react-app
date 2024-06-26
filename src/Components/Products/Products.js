import React, { useContext } from 'react';
import './Products.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Cart3 } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../App';

 const Products = (props) => {

    //shorten details of product
    const tString = (str, num) => {

        if (str.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }

    const { id, title, price, url } = props.product;

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

    return (
        <Container className='product-container' style={{marginBottom: '20px'}} >
            <Row >
                <Col className='text-center' >
                    <Card className='card-style' style={{ width: '24 rem', margin: 'auto' }}>
                        <Card.Img className='card-img' variant="top" src={url} />
                        <Card.Body>
                            <Link to={`/product-details/${id}`} style={{ textDecoration: 'none', color: 'green' }}><Card.Title >{title} </Card.Title></Link>
                            <Card.Text>
                                {tString(props.product.details, 100)}
                            </Card.Text>
                            <Card.Text>
                                <h4>$ {price}</h4>
                            </Card.Text>
                            <Card.Text>
                                <Button variant="success" onClick={() => addToCart(props.product)}> <Cart3 /> add to cart</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Products;