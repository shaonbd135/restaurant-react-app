import React from 'react';
import './Cart.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Dash, Plus, Trash } from 'react-bootstrap-icons';

const CartDesign = (props) => {
    const { product, removeFromCart, quantityIncrement, quantityDecrement } = props;
    

    return (
        <Container  className='cart-product-container'>
            <Row className='cart-product'>
                <Col xsm={2} sm={3} md={4}  >
                    <img class="img-fluid mx-auto d-block image" style={{ width: '150px', height: '150px' }} src={product.url} alt="" />
                </Col>
                <Col xsm={8} md={8} sm={8} >
                    <Row >
                        <Col xsm={9} md={7} sm={6} >
                            <div> <span >{product.title}</span></div>
                            <div>Category: <span >{product.category}</span></div>                           
                            <div>Price: <span > $ {product.price}</span></div>
                        </Col>
                        <Col xsm={3} md={5} sm={6} >
                            <div>Quantity: <span style={{ cursor: 'pointer' }} onClick={() => quantityDecrement(product)}><Dash /></span> <span >{product.quantity}</span> <span style={{ cursor: 'pointer' }} onClick={() => quantityIncrement(product)}><Plus /></span></div>
                            <div> <p>Total: <span >$ {product.price * product.quantity}</span> </p></div>                           
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <Button style={{ margin: 'auto', marginTop: '10px' }} onClick={() => removeFromCart(product)} variant="danger"><Trash /> Remove from cart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CartDesign;