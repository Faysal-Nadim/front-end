import React from 'react'
import { Layout } from '../../components/Layout'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdOutlineDeleteSweep, MdOutlinePending } from 'react-icons/md'
import { BsCheck2Circle } from 'react-icons/bs'
import './style.css';
import { Row, Col, Button, Container, Tabs, Tab } from 'react-bootstrap'
import { ApprovedRequests } from './Approved'
import { PendingRequests } from './Pending'
import { RejectedRequests } from './Rejected'

/**
* @author
* @function ReqLayout
**/

export const ReqLayout = (props) => {
    const navigate = useNavigate();
    return (
        <Layout>
            <Container fluid>
                <div className='maindiv'>
                    <Row>
                        <div style={{ padding: "20px", display: "flex" }}>
                            <Col md={9}>
                                <h2><strong>Requests</strong></h2>
                            </Col>
                            <Col md={3}>
                                <Button className='button' onClick={() => { navigate('/user/request/new') }} variant='success' >New Request</Button>
                            </Col>
                        </div>
                    </Row>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <Row>
                        <Col md={12}>
                            <Tabs defaultActiveKey="approved" id="uncontrolled-tab-example" className="mb-3">
                                
                                <Tab eventKey="approved" title={
                                    <>
                                        <BsCheck2Circle /> APPROVED
                                    </>
                                }>
                                    <ApprovedRequests />
                                </Tab>

                                <Tab eventKey="pending" title={
                                    <>
                                        <MdOutlinePending /> PENDING
                                    </>
                                }>
                                    <PendingRequests />
                                </Tab>

                                <Tab eventKey="rejected" title={
                                    <>
                                    <MdOutlineDeleteSweep /> REJECTED
                                    </>
                                }>
                                    <RejectedRequests />
                                </Tab>
                            </Tabs>
                        </Col>

                    </Row>
                </div>
            </Container>
        </Layout >
    )
}