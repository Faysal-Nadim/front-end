import React from 'react';
import { Row, Col, Container, Badge, Button } from 'react-bootstrap';
import { generatePublicURL } from '../../urlconfig';

/**
* @author
* @function OrderDetails
**/

export const OrderDetails = ({ detail }) => {
    return (
        <Row key={detail._id}>
            <Container>
                <div className='detailsDiv'>
                    <Col md={12}>
                        <div className='orders'>
                            <Col md={2}>
                                <div>
                                    {
                                        detail.request.productImage.map(image => (
                                            <div className='orderImg'>
                                                <img src={generatePublicURL(image.img)} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='allDetails'>
                                    <div style={{ fontSize: "18px" }}>
                                        <a target="_blank" href={`${detail.request.productLink}`}>{detail.request.title}</a>
                                    </div>
                                    <div><b> Quantity: </b>{detail.quantity}</div>
                                    <div><b>Total Item Price: </b>{detail.itemPrice}</div>
                                    <div><b>Note: </b>{detail.request.note}</div>
                                    <div><b>Freight: </b>{detail.freightCategory} (BDT {detail.freightRate}/KG)</div>
                                    <div>
                                        <b>Status: </b>
                                        {
                                            detail.reqStatus === 'pending' ? <Badge bg="primary">{detail.reqStatus.toUpperCase()}</Badge>
                                                : detail.reqStatus === 'processing' ? <Badge bg="secondary">{detail.reqStatus.toUpperCase()}</Badge>
                                                    : detail.reqStatus === 'purchased' ? <Badge bg="success">{detail.reqStatus.toUpperCase()}</Badge>
                                                        : detail.reqStatus === 'received by agent' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                            : detail.reqStatus === 'preparing for shipment' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                : detail.reqStatus === 'handover to airline' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                    : detail.reqStatus === 'arrived at destination airport' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                        : detail.reqStatus === 'released from customs' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                            : detail.reqStatus === 'at alistorebd warehouse' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                : detail.reqStatus === 'refund initiated' ? <Badge bg="dark">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                    : detail.reqStatus === 'processing for refund' ? <Badge bg="info">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                        : detail.reqStatus === 'delivered' ? <Badge bg="success">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                            : detail.reqStatus === 'canceled' ? <Badge bg="danger">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                                : detail.reqStatus === 'refunded' ? <Badge bg="warning" text="dark">{detail.reqStatus.toUpperCase()}</Badge>
                                                                                                    : ''
                                        }
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div style={{ padding: "30px" }}>
                                    <Button variant='outline-success'><b>Track Order</b></Button>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </div>
            </Container>
        </Row>
    )

}