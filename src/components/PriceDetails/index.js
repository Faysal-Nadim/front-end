import React from 'react'
import './style.css'
import { Col, Row, Button, Form } from 'react-bootstrap'

/**
* @author
* @function PriceDeatails
**/

export const PriceDeatails = (props) => {
    return (
        <Row>
            <h4 className='cart_details' style={{ textAlign: "center", paddingTop: "10px" }}>Cart Details</h4>
            <div className='price-div'>
                <div className='_details'>
                    <Col md={8}>
                        <div style={{ paddingTop: "15px" }}>
                            Total Items
                        </div>
                        <div style={{ paddingTop: "15px" }}>Total Price</div>
                        <div style={{ paddingTop: "15px" }}>Delivery Charge</div>
                        <div style={{ paddingTop: "15px" }}>
                            Freight Charge
                        </div>
                    </Col>
                    <Col md={4} style={{ textAlign: "center" }}>
                        <div style={{ paddingTop: "15px" }}>{props.totalItem}</div>
                        <div style={{ paddingTop: "15px" }}>{props.totalPrice}</div>
                        <div style={{ paddingTop: "15px" }}>N/A</div>
                        <div style={{ paddingTop: "15px", paddingBottom: "20px" }}>N/A</div>
                    </Col>
                </div>
                <Row>
                    <Col md={8}>
                        <div style={{ paddingTop: "15px", fontSize: "18px" }}>Payable Total</div>
                    </Col>
                    <Col md={4}>
                        <div style={{ paddingTop: "15px", textAlign: "center", fontSize: "18px" }}>{props.totalPrice}</div>
                    </Col>
                    <div style={{ textAlign: "center", fontSize: "10px", marginTop: "20px" }}>
                        <p>*Freight Charge & Delivery Charge Is Subject To Product Weight Which Will Be Calculated After Arival Of The Product</p>
                    </div>
                    <div>
                        
                    </div>
                </Row>
            </div>
        </Row>
    )

}