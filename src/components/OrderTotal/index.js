import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { placeOrder } from '../../actions/order.action'
import './style.css';
import { useNavigate } from 'react-router-dom';
import { removeCart } from '../../actions';

/**
* @author
* @function OrderTotal
**/

export const OrderTotal = ({ order, totalPrice, totalItem }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(order)

    return (
        <Container fluid>
            <div className='order-div'>
                <Form onSubmit={(e) => {
                    const orders = order.cartItems.map((requests) => ({
                        request: requests.request._id,
                        freightCategory: requests.freightCat.name,
                        freightRate: requests.freightCat.rate,
                        quantity: requests.quantity,
                        price: requests.price,
                        itemPrice: requests.quantity * requests.price,
                    }))
                    const requestID = order.cartItems.map((reqID) => ({
                        _id: reqID.request._id
                    }))
                    dispatch(placeOrder(orders, totalPrice, totalItem))
                    dispatch(removeCart(requestID));
                    e.preventDefault()
                    navigate(`/user/order`)
                }}>
                    <Row>
                        <Col md={10}>
                            <div style={{ fontSize: "20px" }}>
                                Order Total: <b> BDT {totalPrice}</b>
                            </div>
                            <Form.Group>
                                <Form.Check
                                    required
                                    label="I Agree To Your Terms & Conditions, Privacy Policy, Refund Policy"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <div style={{ paddingTop: "10px" }}>
                                { totalPrice > 0 ? <Button variant='outline-success' type="submit"><b>Place Order</b></Button> : <Button disabled variant='outline-success' type="submit"><b>Place Order</b></Button> }
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container >
    )
}