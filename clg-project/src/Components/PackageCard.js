import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const PackageCard=({ name, attractions, price, rating, img })=> {
  return (
    <Col md={4} className="mb-4">
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{attractions}</Card.Text>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Rating:</strong> {rating}</p>
        <Button variant="success">Book Now</Button>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default PackageCard