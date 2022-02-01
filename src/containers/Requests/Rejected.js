import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userRejectedRequest } from '../../actions';
import { Row, Col, Container, Badge } from 'react-bootstrap';
import { ReqLayout } from './ReqLayout';
import { generatePublicURL } from '../../urlconfig';
import './rstyle.css'

/**
* @author
* @function RejectedRequests
**/

export const RejectedRequests = (props) => {

  const auth = useSelector(state => state.auth);
  const request = useSelector(state => state.request);
  const dispatch = useDispatch();

  const _id = auth.user._id;

  useEffect(() => {
    dispatch(userRejectedRequest(_id));
  }, [])

  return (
    <>
      {
        request.requestListR.length ?
          request.requestListR.slice().reverse().map(request => (
            <Container>
              <div key={request._id} className='reqDiv-1'>
                <Row>
                  <Col md={2}>
                    <div style={{ display: "flex" }}>
                      <div className='imageContainer-1'>
                        <img src={generatePublicURL('rejected.png')} />
                      </div>
                    </div>
                  </Col>
                  <Col md={5}>
                    <Row>
                      <div className='req-1'>
                        <span><b>Request ID {request.reqID}</b></span><br />
                      </div>
                      <div className='title-1'>
                        <span>Product Link - <a target="_blank" href={request.productLink}><h5>{request.productLink}</h5></a></span>
                      </div>
                    </Row>
                    <Row>
                      <div className='note-1'>
                        <span>Note - {request.note}</span>
                      </div>
                    </Row>
                  </Col>
                  <Col md={3}>
                    <div className='detail-1'>
                      <div className='status'>
                        Request Status: <Badge bg="danger">{request.status.toUpperCase()}</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          )) : <p style={{ color: "gray", textAlign: "center", marginTop: "50px" }}><h4>No Requests Available</h4></p>
      }
    </>
  )
}