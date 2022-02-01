import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems, removeCart, updateCart } from '../../actions';
import { Layout } from '../../components/Layout'
import { generatePublicURL } from '../../urlconfig';
import { Row, Col, Container } from 'react-bootstrap';
import './style.css'
import { PriceDeatails } from '../../components/PriceDetails';
import { OrderTotal } from '../../components/OrderTotal';
import { BsTrash } from 'react-icons/bs'

/**
* @author
* @function Cart
**/

export const Cart = (props) => {

    const getCart = useSelector((state) => state.getCart);
    const userOrder = useSelector((state) => state.userOrder);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItems());
    }, [])

    // const onQuantityIncrement = (details, qty) => {
    //     const { _id, name, price } = details;
    //     dispatch(addToCart({ _id, name, price }, 1));
    //   };

    // if(userOrder.orderPlaced){
    //     return (
    //         <Navigate to={`/`} />
    //     )
    // }

    return (
        <Layout>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='cartHead'>
                            <div style={{ textAlign: "center", marginTop: "90px" }}>
                                <h2><strong>Cart</strong></h2>
                                <p style={{ fontSize: "12px", paddingBottom: "10px", color: "#6C757D" }}>Find Your Cart Details Below</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {
                Object.keys(getCart.getCartItems).map((key, index) => {
                    return (
                        <>
                            {
                                getCart.getCartItems[key].map(newCart => (
                                    <>
                                        <Container fluid>
                                            <Row>

                                                <Col md={9}>
                                                    <Container>
                                                        <div className='cart-header'>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <span>Products</span>
                                                                </Col>
                                                                <Col md={1}>
                                                                    <span>Price/Unit</span>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <span>Quantity</span>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <span>Total Price</span>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Container>
                                                    {
                                                        newCart.cartItems.length ?
                                                        newCart.cartItems.slice().reverse().map((details) => (
                                                            <>
                                                                <Container>
                                                                    <div className='cartDiv'>
                                                                        <Row>
                                                                            <Col md={6}>
                                                                                <div className='product-details'>
                                                                                    {
                                                                                        details.request.productImage.map(image => (
                                                                                            <div className='img-container'>
                                                                                                <img src={generatePublicURL(image.img)} />
                                                                                            </div>
                                                                                        ))
                                                                                    }
                                                                                    <div className='details'>
                                                                                        <div className='id'>
                                                                                            Request ID <b>{details.request.reqID}</b>
                                                                                        </div>
                                                                                        <div className='product-title'>
                                                                                            <span>{details.request.title}</span>
                                                                                        </div>
                                                                                        <div className='freight-cat'>
                                                                                            <span>Freight Category: <b>{details.freightCat.name} (BDT {details.freightCat.rate}/KG)</b></span>
                                                                                        </div>
                                                                                        <div className='request-note'>
                                                                                            <span>Note - {details.request.note}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Col>
                                                                            <Col md={1} style={{ textAlign: "center", paddingTop: "40px" }}>
                                                                                <span>৳{details.price}</span>
                                                                            </Col>
                                                                            <Col md={2} style={{ textAlign: "center", paddingTop: "40px" }}>
                                                                                <div className='quantityControl'>

                                                                                    {details.quantity <= 1 ? <button disabled><b>-</b></button> : <button onClick={(e) => {
                                                                                        const qty = -1;
                                                                                        const newcart = details.request;
                                                                                        dispatch(updateCart(newcart, qty));
                                                                                        // window.location.reload();
                                                                                    }}>-</button>}

                                                                                    <span>{details.quantity}</span>

                                                                                    <button onClick={(e) => {
                                                                                        const qty = 1;
                                                                                        const newcart = details.request;
                                                                                        dispatch(updateCart(newcart, qty));
                                                                                        // window.location.reload();
                                                                                    }} > + </button>

                                                                                </div>
                                                                            </Col>
                                                                            <Col md={2} style={{ textAlign: "center", paddingTop: "40px" }}>
                                                                                <span>৳{details.price * details.quantity}</span>
                                                                            </Col>
                                                                            <Col md={1}>
                                                                                <div className='removeItem' style={{ textAlign: "center", paddingTop: "40px", paddingRight: "10px" }}>
                                                                                    <span onClick={() => {
                                                                                        const requestID = {
                                                                                            _id: details.request._id
                                                                                        };
                                                                                        dispatch(removeCart(requestID));
                                                                                    }}>
                                                                                        <BsTrash />
                                                                                    </span>
                                                                                </div>
                                                                            </Col>
                                                                        </Row>
                                                                    </div>
                                                                </Container>
                                                            </>
                                                        )) : <p style={{ color: "gray",textAlign: "center", marginTop: "50px" }}><h4>No Items In Cart</h4></p>
                                                    }
                                                </Col>

                                                <Col md={3}>
                                                    <PriceDeatails
                                                        totalItem={Object.keys(newCart.cartItems).reduce(function (quantity, key) {
                                                            return quantity + newCart.cartItems[key].quantity;
                                                        }, 0)}
                                                        totalPrice={Object.keys(newCart.cartItems).reduce((totalPrice, key) => {
                                                            const { price, quantity } = newCart.cartItems[key];
                                                            return totalPrice + price * quantity;
                                                        }, 0)}
                                                    />
                                                </Col>
                                            </Row>
                                        </Container>
                                        <OrderTotal
                                            order={newCart}
                                            totalItem={Object.keys(newCart.cartItems).reduce(function (quantity, key) {
                                                return quantity + newCart.cartItems[key].quantity;
                                            }, 0)}

                                            totalPrice={Object.keys(newCart.cartItems).reduce((totalPrice, key) => {
                                                const { price, quantity } = newCart.cartItems[key];
                                                return totalPrice + price * quantity;
                                            }, 0)}
                                        />
                                    </>
                                ))
                            }

                        </>
                    )
                })
            }

        </Layout>
    )
}