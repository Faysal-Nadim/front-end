import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

/**
* @author
* @function Bkash
**/

export const Bkash = ({ payInfo }) => {

    const total = payInfo.totalPrice;
    const gatewayFee = (((payInfo.totalPrice) * 1.5) / 100);
    const payable = gatewayFee + + total;

    return (
        <>
            <Row>
                <script src='/initBkash.js'></script>
                <div style={{ textAlign: "center" }}>
                    <h4>bKash Checkout</h4>
                </div>

                <div className='bkash-pay'>
                    <div style={{ textAlign: "center", fontWeight: "700" }}>
                        <Container fluid>
                            <table>
                                <tr className='head-bkash'>
                                    <td>Order Total</td>
                                    <td>Gateway Fee (1.5%)</td>
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
                            <div className='bkash-button'>
                                <span id="bKash_button">
                                    Pay Using bKash
                                    <img src='https://www.logo.wine/a/logo/BKash/BKash-Icon2-Logo.wine.svg' />
                                </span>
                            </div>
                        </Container>
                    </div>
                </div>

            </Row>
        </>
    )

}