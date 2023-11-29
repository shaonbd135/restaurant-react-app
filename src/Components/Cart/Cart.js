import React, { useContext } from 'react';
import { Context } from '../../App';
import CartDesign from './CartDesign';
import './Cart.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'react-bootstrap-icons';


const Cart = () => {

    const navigator = useNavigate();

    // Remove product from cart

    const [cart, setCart] = useContext(Context);

    const removeFromCart = (product) => {
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
    }

    // for If the cart is empty, display a message to the user

    let cartItems = false;

    if (cart.length > 0) {

        cartItems = true;
    }



    // Quantity Handler for increment and decrement
    const quantityIncrement = (product) => {

        const newCart = cart.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(newCart);

    }
    const quantityDecrement = (product) => {

        const newCart = cart.map(item => {
            if (item.id === product.id) {

                if (item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCart(newCart);
    }

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
        <div>
            {cartItems ? (
                <Container className='cart-container'>
                    <Row>
                        <Col md={8} >
                            {
                                cart.map(product =>
                                    <CartDesign quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} product={product} key={product.id} removeFromCart={removeFromCart}></CartDesign>
                                )
                            }
                        </Col>
                        <Col md={4} >
                            <h4 className='text-center' style={{ marginTop: '20px', color: 'black', backgroundColor: 'lightgray', padding: '5px', borderRadius: '5px' }}>Order Summery</h4>
                            <div className='text-center' style={{ marginTop: '20px' }}>
                                <p style={{ color: 'white', backgroundColor: 'black', borderRadius: '5px', padding: '5px' }}>10% discount on order value more than 100</p>
                            </div>
                            <div className='order-summery'>
                                <div class="summary-item"><span class="text">Subtotal</span><span class="price">$ {subTotal}</span></div>
                                <div class="summary-item"><span class="text">Discount</span><span class="price">$ {discount}</span></div>
                                <div class="summary-item"><span class="text">Shipping</span><span class="price">$ {shipping}</span></div>
                                <div class="summary-item"><span class="text">Total</span><span class="price">$ {grandTotal}</span></div>
                            </div>
                            <div className='text-center'>
                                <Button variant="success" onClick={() => navigator('/checkout')}> <CreditCard/> Checkout</Button>
                            </div>

                        </Col>
                    </Row>
                </Container>

            ) : <div style={{ margin: 'auto' }}>

                {/* If the cart is empty, display a message */}

                <h2 style={{ textAlign: 'center', color: 'red', fontWeight: 'bold', marginTop: '50px' }}>Your cart is empty! please add some items</h2>
                <Card style={{ width: '30rem' }} className="text-center m-auto mt-5 mb-5">
                    <Card.Img variant="top" src="https://i.ibb.co/M67prWX/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce.jpg" />
                    <Card.Body>
                        <Card.Title style={{ color: 'red' }}>Your Cart is empty</Card.Title>
                        <Card.Text>
                            Please add some items in your cart
                        </Card.Text>
                        <Button variant="danger" onClick={() => navigator('/shop')} >Go to Shop</Button>
                    </Card.Body>
                </Card>
            </div>}
        </div>
    );
};

export default Cart;