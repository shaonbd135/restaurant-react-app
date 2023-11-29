import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeDataBase/FakeDataBase'
import Products from '../Products/Products';
import { Col, Container, Nav, Row } from 'react-bootstrap';

const HomePageProduct = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        //FakeData is coming from FakeDataBase. fakeData is an array made by me. you can find it in FakeDataBase folder.
        // default breakfast items will be coming here
        const newProducts = FakeData.filter(product => product.category.toString() === 'breakfast'.toString());
        setProducts(newProducts);
    }, []);

    const productHandler = (category) => {
        // items set by user will be coming here from 
        const newProducts = FakeData.filter(product => product.category.toString() === category.toString());
        setProducts(newProducts);   
    }
    return (
        <Container style={{ marginBottom: '50px' }}>
            <Row>
                <Nav variant="tabs" defaultActiveKey="link-0" className="justify-content-center" style={{ marginTop: '30px' }}>
                    <Nav.Item>
                        <Nav.Link   onClick={() => productHandler('breakfast')} eventKey="link-0" style={{ color: 'green' }}>Break Fast</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => productHandler('lunch')} eventKey="link-1" style={{ color: 'green' }}>Lunch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={() => productHandler('dinner')} eventKey="link-2" style={{ color: 'green' }}> Dinner </Nav.Link>
                    </Nav.Item>
                </Nav>

                {products.map(product => {
                    return (
                        //Products Coming Here from Products Component

                        <Col md={6} sm={12} xxl={4} xl={4} key={product.id} className='text-center' style={{ marginTop: '30px' }}>
                            <Products product={product}></Products>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
};

export default HomePageProduct;