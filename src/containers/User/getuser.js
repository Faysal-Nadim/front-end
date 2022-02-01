import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../components/UI/Input';
import { getUser, upUser } from '../../actions';
import './style.css';
import { Layout } from '../../components/Layout';

/**
* @author
* @function GetUser
**/

export const GetUser = (props) => {

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [])

    const [phone, setPhone] = useState(auth.getUser.phone);
    const [division, setDivision] = useState(auth.getUser.division);
    const [district, setDistrict] = useState(auth.getUser.district);
    const [deliveryAddress, setDeliveryAddress] = useState(auth.getUser.deliveryAddress);

    const users = [auth.getUser];

    const updatedProfile = (e) => {
        const form = { phone, division, district, deliveryAddress };
        dispatch(upUser(form));
        e.preventDefault();
    }

    return (
        <Layout>
            <>
                {
                    users.map(user => 
                        <Container fluid>
                            <Row>
                                <Col>
                                    <div className='cartHead'>
                                        <div style={{ textAlign: "center", marginTop: "90px" }}>
                                            <h2><strong>Profile</strong></h2>
                                            <p style={{ fontSize: "12px", paddingBottom: "10px", color: "#6C757D" }}>Manage Your Profile</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Container>
                                        <div className='profileDiv'>
                                            <div style={{ padding: "5px" }}>
                                                <Row>
                                                    <Col>
                                                        <label style={{ paddingBottom: "8px" }}>First Name</label>
                                                        <input
                                                            disabled
                                                            className='form-control'
                                                            placeholder="Enter Your First Name"
                                                            type="text"
                                                            value={user.firstName}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <label style={{ paddingBottom: "8px" }}>Last Name</label>
                                                        <input
                                                            disabled
                                                            className='form-control'
                                                            placeholder="Enter Your last Name"
                                                            type="text"
                                                            value={user.lastName}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div style={{ padding: "5px" }}>
                                                <Row>
                                                    <Col>
                                                        <label style={{ paddingBottom: "8px" }}>Email</label>
                                                        <input
                                                            disabled
                                                            className='form-control'
                                                            placeholder="Enter Your First Name"
                                                            type="text"
                                                            value={user.email}
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
                                            <div style={{ paddingTop: "15px", paddingLeft: "5px" }}>
                                                <Row>
                                                    <Col>
                                                        <Button onClick={updatedProfile} variant="secondary">Update Profile</Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    )
                }
            </>
        </Layout>
    )

}