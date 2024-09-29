import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={5}>
            <h5>Travel Spot</h5>
          </Col>
          <Col md={7} className="text-md-right">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="text-center">
            <p>&copy; 2024 Travel Spot. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
