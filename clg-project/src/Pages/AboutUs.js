import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assests/logo.png";

const AboutUs = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">About Us</h2>
      <Row>
        <Col md={6}>
          <img
            src={logo}
            alt="Company"
            style={{ width: '40%', height: 'auto' }}
          />
        </Col>
        <Col md={6}>
          <div>
            <h3>Our Company</h3>
            <p>
              Established in 2020, we are committed to delivering top-notch
              services to our clients. Our expertise spans various industries, 
              ensuring tailored solutions for every client.
            </p>
            <p>
              With a growing portfolio and a dedicated team, we continue to
              expand our reach and deliver excellence in everything we do.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
