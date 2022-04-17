import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const Header = (props) => {
  return (
    <Container fluid className="bg-success py-3">
      <Row>
        <Col className="col-md-2">
          <div className="text-white fs-2">Logo</div>
        </Col>
        <Col className="col-md-10 d-flex justify-content-end">
          <Nav>
            <Nav.Link href="/home" className="text-white fs-4">
              Home
            </Nav.Link>
            <Nav.Link href="/products" className="text-white fs-4">
              Products
            </Nav.Link>
            <Nav.Link href="/cart" className="text-white fs-4">
              Cart <sup class="fs-5 badge bg-danger">{props.count}</sup>
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white fs-4">
              Contact
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
