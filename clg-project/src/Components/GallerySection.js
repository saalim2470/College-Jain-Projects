import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const GallerySection = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://plus.unsplash.com/premium_photo-1721353413070-bb55c58138fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D'
  ];

  const imageStyle = {
    transition: 'transform 0.3s ease',
    height:400
  };

  const hoverEffect = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const removeHoverEffect = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Gallery</h2>
      <Row>
        {galleryImages.map((image, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Img
                src={image}
                style={imageStyle}
                onMouseEnter={hoverEffect}
                onMouseLeave={removeHoverEffect}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GallerySection;
