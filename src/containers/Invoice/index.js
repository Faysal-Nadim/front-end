import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../components/Layout";

/**
 * @author
 * @function Invoice
 **/

export const Invoice = (props) => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col>
            <div className="cartHead">
              <div style={{ textAlign: "center", marginTop: "90px" }}>
                <h2>
                  <strong>Invoice</strong>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
