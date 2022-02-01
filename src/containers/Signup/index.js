import React, { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
import './style.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../actions'

/**
* @author
* @function Signup
**/

export const Signup = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [deliveryAddress, setDeliveryAddress] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userSignup = (e) => {
        const user = {
            firstName, lastName, email, phone, userName, password, division, district, deliveryAddress
        }
        dispatch(signUp(user));
        e.preventDefault();
        navigate('/')
    }

    return (
        <Layout>
            <Container fluid>
                <Form onSubmit={userSignup}>
                    <Row>
                        <Col>
                            <div className='cartHead'>
                                <div style={{ textAlign: "center", marginTop: "90px" }}>
                                    <h2><strong>Signup</strong></h2>
                                    <p style={{ fontSize: "12px", paddingBottom: "10px", color: "#6C757D" }}>Signup As A New User</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Container>
                        <div className='signup'>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <Input
                                            required
                                            label="First Name"
                                            placeholder="Enter Your First Name"
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            required
                                            label="Last Name"
                                            placeholder="Enter Your Last Name"
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <Input
                                            required
                                            label="Email"
                                            placeholder="Enter A Valid Email Address"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            required
                                            label="Phone"
                                            placeholder="Enter Your Phone"
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <Input
                                            required
                                            label="Username"
                                            placeholder="Enter A Username"
                                            type="text"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </Col>
                                    <Col>
                                        <Input
                                            required
                                            label="Password"
                                            placeholder="Enter A Strong Password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <label style={{ paddingBottom: "8px" }}>Division</label>
                                        <select
                                            className='form-control'
                                            value={division}
                                            onChange={(e) => setDivision(e.target.value)}
                                        >
                                            <option value="">Select Division</option>
                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Barishal">Barisal</option>
                                            <option value="Chittagong">Chittagong</option>
                                            <option value="Khulna">Khulna</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                            <option value="Rajshahi">Rajshahi</option>
                                            <option value="Rangpur">Rangpur</option>
                                            <option value="Sylhet">Sylhet</option>
                                        </select>
                                    </Col>
                                    <Col>
                                        <Input
                                            required
                                            label="District"
                                            placeholder="Enter Your District"
                                            type="text"
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <label style={{ paddingBottom: "8px" }}>Delivery Address</label>
                                        <textarea
                                            required
                                            className='form-control'
                                            placeholder='Enter Your Delivery Address'
                                            value={deliveryAddress}
                                            onChange={(e) => setDeliveryAddress(e.target.value)}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col>
                                        <Form.Check
                                            required
                                            label="I Agree To Your Privacy Policy"
                                            feedback="You must agree before submitting."
                                            feedbackType="invalid"
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <div style={{ padding: "5px" }}>
                                <Row>
                                    <Col md={8}>
                                        <Button variant="secondary" type="submit"><b>Signup</b></Button>
                                    </Col>
                                    <Col md={4}>
                                        <span><b>Already An User? <a href='/'>Login</a></b></span>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                </Form>
            </Container>
        </Layout>
    )

}