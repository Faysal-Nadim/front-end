import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

/**
* @author
* @function SSL
**/

export const SSL = ({ payInfo }) => {

    const total = payInfo.totalPrice;
    const gatewayFee = (((payInfo.totalPrice) * 2.5) / 100);
    const payable = gatewayFee + + total;

    return (
        <>
            <Row>

                <div style={{ textAlign: "center" }}>
                    <h4>SSL COMMERZ</h4>
                </div>

                <div className='ssl-pay'>
                    <div style={{ textAlign: "center", fontWeight: "700" }}>
                        <Container fluid>
                            <table className='ssl'>
                                <tr className='head-ssl'>
                                    <td>Order Total</td>
                                    <td>Gateway Fee (2.5%)</td>
                                    <td>Payable Total</td>
                                    <td>Reference</td>
                                </tr>
                                <tr>
                                    <td>BDT {total}</td>
                                    <td>BDT {gatewayFee}</td>
                                    <td>BDT {payable}</td>
                                    <td>{payInfo.invoiceID}</td>
                                </tr>
                            </table>
                            <div className='ssl_button'>
                                <span>Pay With<img src='https://www.sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png' /></span>
                            </div>
                        </Container>
                    </div>
                </div>

            </Row>
        </>
    )

}