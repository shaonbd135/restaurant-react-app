import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './CheckoutPage.css';
import { Bank, Cart, Cart4, CashCoin, Paypal, Stripe } from 'react-bootstrap-icons';
import { Context } from '../../App';

const CheckoutPage = () => {
    const [cart, setCart] = useContext(Context);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        cardNumber: '',
        expiration: '',
        cvc: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };


    // .... Order Summary Calculation Start here.......//

    // Subtotal

    let subTotal = 0;

    for (let i = 0; i < cart.length; i++) {

        subTotal = subTotal + cart[i].price * cart[i].quantity;
    }

    // Discount (10% discount if order value is more than 100$)

    let discount = 0;
    if (subTotal > 100) {

        const discountParcentage = 10;
        discount = subTotal * discountParcentage / 100;
    }

    //Shipping
    let shipping = 0;

    if (subTotal > 0) {
        shipping = 50;
    }

    // Grand Total

    let grandTotal = subTotal - discount + shipping;

    // .... Order Summary Calculation End here.......//


    return (
        <Container className=" mt-2 mb-5 checkout-page">
            <Row>
                {/* Order Summary */}

                <Col className='order' md={4} style={{ borderLeft: '1px solid lightgray' }} >
                    <h5 className='text-center' style={{ marginTop: '20px', color: 'black', backgroundColor: 'lightgray', padding: '5px', borderRadius: '5px' }}>Order Summery</h5>
                    <div className='order-summery'>
                        <div class="summary-item"><span class="text">Subtotal</span><span class="price">$ {subTotal} </span></div>
                        <div class="summary-item"><span class="text">Discount</span><span class="price">$ {discount} </span></div>
                        <div class="summary-item"><span class="text">Shipping</span><span class="price">$ {shipping}</span></div>
                        <div style={{ backgroundColor: 'lightblue', color: 'black' }} class="summary-item"><span class="text">Total</span><span class="price">$ {grandTotal}</span></div>
                    </div>
                    <Row>
                        <Col>
                            <h5 className='text-center' style={{ marginTop: '20px', color: 'black', backgroundColor: 'lightgray', padding: '5px', borderRadius: '5px' }}>Your Items</h5>
                            {
                                cart.map(product => {
                                    return (
                                        <div className='checkout-product'>
                                            <img src={product.url} alt="" />
                                            <p>{product.title}</p>
                                            <p><span>Price: $ {product.price} </span> x <span>Quantity: {product.quantity} </span></p>
                                        </div>
                                    )

                                })
                            }
                        </Col>
                    </Row>
                </Col>

                {/* Checkout */}

                <Col md={8}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2 className="mb-4" style={{ textAlign: 'center', fontWeight: 'bold', color: 'green' }}><Cart4 /> Checkout</h2>
                        <Form onSubmit={handleSubmit} className='checkout-form' >
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your first name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formLastName">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your last name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formZipCode">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your zip code"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your Country Name"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCardNumber">
                                <Form.Label>Credit Card Number <Paypal /> <Stripe /> <Bank /> </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your card number"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formExpiration">
                                        <Form.Label>Expiration Date</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="MM/YY"
                                            name="expiration"
                                            value={formData.expiration}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formCVC">
                                        <Form.Label>CVC</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="CVC"
                                            name="cvc"
                                            value={formData.cvc}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div>
                                <Form.Check
                                    type="checkbox"
                                    id="terms"
                                    label="I agree to the terms and conditions"
                                />
                                <div className="text-center mt-4">

                                    <Button variant="success" type="submit" >
                                        <CashCoin />  Procced to Payment
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    </Col>

                </Col>



            </Row>
        </Container>
    );
};

export default CheckoutPage;