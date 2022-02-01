import React, { useState } from "react";
import { OrderDetails } from "../OrderDetails";
import { Row, Container, Modal, Badge, Button } from "react-bootstrap";
import { Payment } from "../../containers/Payment";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function OrderHead
 **/

export const OrderHead = ({ details }) => {
  const [show, setShow] = useState(false);
  const invoiceID = details.invoiceID;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <div className="orderDiv">
          <Row>
            <Row>
              <div style={{ marginLeft: "35px", padding: "10px" }}>
                <div style={{ display: "flex" }}>
                  <div style={{ fontSize: "18px" }}>
                    Order ID <b>{details.orderID}</b>
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    {details.orderStatus === "pending" ? (
                      <Badge bg="primary">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : details.orderStatus === "processing" ? (
                      <Badge bg="secondary">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : details.orderStatus === "in transit" ? (
                      <Badge bg="info">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : details.orderStatus === "delivered" ? (
                      <Badge bg="success">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : details.orderStatus === "canceled" ? (
                      <Badge bg="danger">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : details.orderStatus === "refunded" ? (
                      <Badge bg="warning" text="dark">
                        {details.orderStatus.toUpperCase()}
                      </Badge>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div>Order At: {details.orderTime}</div>
                <div className="invoice">
                  <div>
                    Invoice:{" "}
                    <NavLink to={`/user/invoice/${invoiceID}`}>
                      View Invoice {details.invoiceID}
                    </NavLink>
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    {details.invoiceStatus === "PAID" ? (
                      <Badge bg="success">{details.invoiceStatus}</Badge>
                    ) : details.invoiceStatus === "UNPAID" ? (
                      <Badge bg="warning">{details.invoiceStatus}</Badge>
                    ) : details.invoiceStatus === "PARTIALLY PAID" ? (
                      <Badge bg="secondary">{details.invoiceStatus}</Badge>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="invoicePay" style={{ marginLeft: "5px" }}>
                    {details.invoiceStatus === "UNPAID" ||
                    details.invoiceStatus === "PARTIALLY PAID" ? (
                      <Badge
                        style={{ cursor: "pointer" }}
                        onClick={handleShow}
                        bg="info"
                      >
                        PAY NOW
                      </Badge>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </Row>
            {details.orderItems.map((items) => (
              <OrderDetails detail={items} />
            ))}
          </Row>
        </div>
      </Container>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay Invoice {details.invoiceID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Payment info={details} />
        </Modal.Body>
        <Modal.Footer>
          <p style={{ fontSize: "12px", textAlign: "center" }}>
            Copyright © 2022, All Right Reserved By Aleeha Technologies LTD.
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
};
