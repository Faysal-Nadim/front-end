import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Badge, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../actions';
import { Layout } from '../../components/Layout'
import { ShowOrder } from '../../components/ShowOrders';
import { generatePublicURL } from '../../urlconfig';
import { Payment } from '../Payment';
import './style.css'

/**
* @author
* @function Orders
**/

export const Orders = (props) => {

    const userOrder = useSelector((state) => state.userOrder);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder());
    }, [])

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='cartHead'>
                            <div style={{ textAlign: "center", marginTop: "90px" }}>
                                <h2><strong>Orders</strong></h2>
                                <p style={{ fontSize: "12px", paddingBottom: "10px", color: "#6C757D" }}>Manage Your Orders</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                {
                    Object.keys(userOrder.getOrders).map((key, index) => {
                        return (
                            <>
                                <div>
                                    <ShowOrder info={userOrder.getOrders[key]} />
                                </div>
                            </>
                        )
                    })
                }
            </Container>
        </Layout>
    )

}