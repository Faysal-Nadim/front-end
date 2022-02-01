import React, { useState } from 'react';
import { Layout } from '../../components/Layout';
import { Row, Col, Container, Form, Button } from 'react-bootstrap';
import { Input } from '../../components/UI/Input';
import './style.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp, userSubmitReq } from '../../actions';
import { generatePublicURL } from '../../urlconfig';

/**
* @author
* @function CreateRequest
**/

export const CreateRequest = (props) => {

    const [productLink, setProductLink] = useState('');
    const [note, setNote] = useState('');
    const [shipFrom, setShipFrom] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const submitRequest = (e) => {
        const newReq = {
            productLink,
            note,
            shipFrom
        }
        dispatch(userSubmitReq(newReq));
        e.preventDefault();
        navigate('/user/requests/pending');
    };


    return (
        <Layout>
            <Container fluid>
                <Form onSubmit={submitRequest}>
                    <Row>
                        <Col>
                            <div className='cartHead'>
                                <div style={{ textAlign: "center", marginTop: "90px" }}>
                                    <h2><strong>Request</strong></h2>
                                    <p style={{ fontSize: "12px", paddingBottom: "10px", color: "#6C757D" }}>Create New Request</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className='imgContainer'>
                                    <div className='req-img'>
                                        <img src={generatePublicURL('pending.svg')} />
                                    </div>
                                </div>
                            </Col>
                            <Col md={8}>
                                <div className='request'>
                                    <div style={{ padding: "5px" }}>
                                        <Row>
                                            <Col>
                                                <Input
                                                    required
                                                    label="Product Link"
                                                    placeholder="Paste Your Product Link Here"
                                                    type="text"
                                                    value={productLink}
                                                    onChange={(e) => setProductLink(e.target.value)}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ padding: "5px" }}>
                                        <Row>
                                            <Col>
                                                <label style={{ paddingBottom: "8px" }}>Country Of Origin</label>
                                                <select
                                                    label={'Country Of Origin'}
                                                    className='form-control'
                                                    value={shipFrom}
                                                    onChange={(e) => setShipFrom(e.target.value)}
                                                >
                                                    <option value="">Select Origin</option>
                                                    <option value="UK">UK</option>
                                                    <option disabled value="USA">USA</option>
                                                    <option value="China">China</option>
                                                </select>
                                            </Col>
                                            <Col>
                                                <label style={{ paddingBottom: "8px" }}>Freight Category & Rate</label>
                                                <select
                                                    label={'Freight Category & Rate'}
                                                    className='form-control'
                                                >
                                                    <option value="">Select Freight</option>
                                                </select>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ padding: "5px" }}>
                                        <Row>
                                            <Col>
                                                <label style={{ paddingBottom: "8px" }}>Request Note</label>
                                                <textarea
                                                    required
                                                    className='form-control'
                                                    placeholder='Please Provide Request Note. e.g. Color, Quantity, Size, Model'
                                                    value={note}
                                                    onChange={(e) => setNote(e.target.value)}
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div style={{ padding: "5px" }}>
                                        <Row>
                                            <Col md={6}>
                                                <Button variant="secondary" type="submit"><b>Submit</b></Button>
                                            </Col>
                                            <Col md={6} style={{ fontSize: "15px", textAlign: "center" }}>
                                                <span>*Please Allow Us Some Time To Check Your Request. We Will Get Back To You Soon</span>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </Form>
            </Container>
        </Layout>
    )

}