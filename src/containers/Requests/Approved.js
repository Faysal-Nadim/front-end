import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, userApprovedRequest, getCartItems } from '../../actions';
import { Row, Col, Container, Badge, Button } from 'react-bootstrap';
import { ReqLayout } from './ReqLayout';
import { generatePublicURL } from '../../urlconfig';
import './astyle.css'

/**
* @author
* @function ApprovedRequests
**/

export const ApprovedRequests = (props) => {

    const auth = useSelector(state => state.auth);
    const request = useSelector(state => state.request);
    const dispatch = useDispatch();

    const _id = auth.user._id;

    useEffect(() => {
        dispatch(userApprovedRequest(_id));
    }, [])

    return (
        <>
            {
                request.requestListA.length ?
                    request.requestListA.slice().reverse().map(request => (
                        <Container>
                            <div key={request._id} className='reqDiv'>
                                <Row>
                                    <Col md={2}>
                                        <div style={{ display: "flex" }}>
                                            {
                                                request.productImage.map(image => (
                                                    <div className='imageContainer'>
                                                        <img src={generatePublicURL(image.img)} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <Row>
                                            <div className='req'>
                                                <span><b>Request ID {request.reqID}</b></span><br />
                                            </div>
                                            <div className='title'>
                                                <span><a target="_blank" href={request.productLink}><h5>{request.title}</h5></a></span>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className='note'>
                                                <span>Note - {request.note}</span>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <div className='detail'>
                                            <div className='status'>
                                                Request Status: <Badge bg="success">{request.status.toUpperCase()}</Badge>
                                            </div>
                                            <div className='price'>
                                                Product Price: <b> BDT {request.price}/Unit</b>
                                            </div>
                                            <div className='freight'>
                                                Freight Category: <b> {request.freightCat.name}</b>
                                            </div>
                                            <div className='rate'>
                                                Freight Rate: <b> BDT {request.freightCat.rate}/KG</b>
                                            </div>
                                            <div className='ship'>
                                                Ship From: <Badge bg="secondary">{request.shipFrom}</Badge>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={{ span: 2, offset: 0 }}>
                                        <div className="cart-new">
                                            <Button onClick={() => {
                                                const qty = 1;
                                                dispatch(addToCart(request, qty));
                                                dispatch(getCartItems());
                                            }}
                                                variant="outline-dark">Add To Cart</Button>
                                        </div>
                                        <div className='policy'>
                                            <span>*Freight Charge Will Be Added After Arrival Of The Product</span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <div className='est'>
                                        <span>Estimated Delivery Time <b>{request.estDelivery}</b></span>
                                    </div>
                                </Row>
                            </div>
                        </Container>
                    )) : <p style={{ color: "gray", textAlign: "center", marginTop: "50px" }}><h4>No Requests Available</h4></p>
            }
        </>
    )
}