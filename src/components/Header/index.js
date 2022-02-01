import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/auth.actions';
import { NavLink } from 'react-router-dom';
import { CartIcon } from '../UI/Cart';
import { getCartItems } from '../../actions';
import { login } from '../../actions/auth.actions';
import { Input } from '../UI/Input';
import './style.css';

/**
* @author
* @function Header
**/

export const Header = (props) => {

    const [show, setShow] = useState(false);
    const auth = useSelector(state => state.auth);
    const getCart = useSelector((state) => state.getCart);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = (e) => {
        const user = {
            email, password
        }
        dispatch(login(user));
        e.preventDefault();
        setShow(false);
    }

    const logout = () => {
        dispatch(signout());
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getCartItems());
    }, [])

    const loggedInUser = () => {
        return (
            <>
                <Nav>
                    <div className="container">
                        <div className="dropdown">
                            <div className="profile"> <img class="dropbtn" src="https://i.imgur.com/ywRonqz.jpg" />
                                <div className="dropdown-content">
                                    <ul>
                                        <li><NavLink to='/user/requests'><i class='bx bx-file-find'></i><span>Requests</span></NavLink></li>
                                        <li><NavLink to='/user/order'><i className='bx bx-store-alt'></i><span>Orders</span></NavLink></li>
                                        <li><NavLink to='/user/profile'><i className='bx bx-user'></i><span>Profile</span></NavLink></li>
                                        <li><NavLink to='/'><i className='bx bx-help-circle'></i><span>Help</span></NavLink></li>
                                        <li><NavLink to='/'><i className='bx bx-log-out'></i><span onClick={logout}>Logout</span></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Nav>
                <Nav>
                    <li className='cart'>
                        <NavLink to="/user/cart">
                            {
                                Object.keys(getCart.getCartItems).map((key, index) => {
                                    return (
                                        <>
                                            {
                                                getCart.getCartItems[key].map(newCart => (
                                                    <CartIcon
                                                        totalItem={Object.keys(newCart.cartItems).reduce(function (quantity, key) {
                                                            return quantity + newCart.cartItems[key].quantity;
                                                        }, 0)}
                                                    />
                                                ))
                                            }
                                        </>
                                    )
                                })
                            }
                        </NavLink>
                    </li>
                </Nav>
            </>
        )
    }

    const nonLoggedInUser = () => {
        return (
            <Nav>
                <li>
                    <Button variant="outline-dark" onClick={handleShow}>Login</Button>
                </li>
                <li className='signuphead'>
                    <NavLink to='/user/signup'><Button variant="outline-dark">Signup</Button></NavLink>
                </li>
            </Nav>
        )
    }

    return (
        <Navbar style={{ fontSize: "15px" }} fixed="top" className='nav-main' collapseOnSelect expand="lg" bg='light' variant="light">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to='/'>
                        <img style={{ width: "20%", margin: "-10px 0 -10px 20px" }} src='https://alistore-bd.com/public/uploads/all/OcE5f8LLEmL42izaqeU1vgoaBKHGlh9J9fHm40hN.png' />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    {auth.authenticate ? loggedInUser() : nonLoggedInUser()}
                    <Nav>
                        <li className='faq'>
                            <NavLink to="/"><b>FAQ</b></NavLink>
                        </li>

                        <li className='faq'>
                            <NavLink to="/"><b>Track Order</b></NavLink>
                        </li>
                    </Nav>
                </Navbar.Collapse>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login To Your Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="Enter your email address"
                                value={email}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <Input
                                label="Password"
                                placeholder="Enter your password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button style={{ marginTop: '10px' }} variant="outline-dark" type="submit">
                                <b>
                                    Login
                                </b>
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        Don't Have Any Account?<NavLink to={`register`}>Register Now</NavLink>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Navbar>
    )

}