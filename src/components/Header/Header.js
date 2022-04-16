import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-2">
          <div className="text-white fs-3">Logo</div>
        </Col>
        <Col className="col-md-10 d-flex justify-content-end">
          <Nav>
            <Nav.Link href="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="/products" className="text-white">
              Products
            </Nav.Link>
            <Nav.Link href="/cart" className="text-white">
              Cart
            </Nav.Link>
            <Nav.Link href="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
