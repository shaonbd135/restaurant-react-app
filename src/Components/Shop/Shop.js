import React, { useEffect, useState } from 'react';
import FakeData from '../../FakeDataBase/FakeDataBase'
import Products from '../Products/Products';
import { Col, Container, Nav, Row } from 'react-bootstrap';


const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        //FakeData is coming from FakeDataBase. fakeData is an array made by me. you can find it in FakeDataBase folder.
        setProducts(FakeData);
    }, []);

    return (
        <Container style={{ marginBottom: '50px' }}>
            <Row>
                
 
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

export default Shop;