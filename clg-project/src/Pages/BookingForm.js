import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';

// Sample package data
const packages = [
  {
    name: 'Paris',
    attractions: 'Eiffel Tower, Louvre Museum, Notre-Dame',
    price: '$1200',
    rating: '4.5',
    img: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900'
  },
  {
    name: 'Maldives',
    attractions: 'Beaches, Scuba Diving, Coral Reefs',
    price: '$2200',
    rating: '4.7',
    img: 'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTKYmJBU4TAA9PgrF_WMIX0iIiTpWnlJEzDJZsn3PvWE9qN8o8p6RnL2fbG5hetm7NKHUwGakxnee0LoJazPUbPKpDYNwbkmURssVi9rQ'
  },
  {
    name: 'Japan',
    attractions: 'Mount Fuji, Tokyo Tower, Temples',
    price: '$1800',
    rating: '4.8',
    img: 'data:image/jpeg;base64,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'
  },
  // Add more packages as per your need
];
const leftImg="https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0="

const MyForm = () => {
  const [booking, setBooking] = useState({
    destination: '',
    people: 1,
    startDate: '',
    endDate: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    if (booking.destination && booking.people && booking.startDate && booking.endDate && booking.description.length >= 50) {
      alert('Booking successful');
    } else {
      alert('Please fill in all fields correctly');
    }
  };

  return (
    <Row className="my-4">
      {/* Left Side: Image */}
      <Col md={6}>
        <img
    src={leftImg}
          alt="Brand or Company"
          className="img-fluid"
        />
      </Col>

      {/* Right Side: Form */}
      <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="destination">
            <Form.Label>Where to</Form.Label>
            <Form.Control as="select" name="destination" value={booking.destination} onChange={handleInputChange}>
              <option value="">Select a destination</option>
              <option value="Paris">Paris</option>
              <option value="Maldives">Maldives</option>
              <option value="Japan">Japan</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="people">
            <Form.Label>How Many People</Form.Label>
            <Form.Control type="number" name="people" min="1" value={booking.people} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name="startDate" min={new Date().toISOString().split('T')[0]} value={booking.startDate} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="endDate" min={booking.startDate} value={booking.endDate} onChange={handleInputChange} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" minLength={50} maxLength={500} value={booking.description} onChange={handleInputChange} />
          </Form.Group>

          <Button variant="primary" type="submit">Book Now</Button>
        </Form>
      </Col>
    </Row>
  );
};

const PackageCard = ({ name, attractions, price, rating, img }) => (
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
);

const PackageGallery = () => (
  <Row>
    {packages.map((pkg, index) => (
      <PackageCard key={index} {...pkg} />
    ))}
  </Row>
);

const ServicesSection = () => (
  <Row className="my-4">
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Affordable Hotel</Card.Title>
          <Card.Text>We offer the best deals on hotels to make your stay comfortable and budget-friendly.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Food & Drinks</Card.Title>
          <Card.Text>Enjoy delicious meals and refreshing beverages throughout your trip.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Safety Guide</Card.Title>
          <Card.Text>Our experienced guides ensure your safety and comfort on all adventures.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Custom Packages</Card.Title>
          <Card.Text>Tailor-made travel experiences just for you, based on your preferences.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Transportation</Card.Title>
          <Card.Text>We provide reliable and comfortable transportation throughout your journey.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card>
        <Card.Body>
          <Card.Title>Local Support</Card.Title>
          <Card.Text>Get 24/7 assistance from our local team, ensuring a hassle-free experience.</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

const BookingForm = () => (
  <Container>
    {/* Booking Form */}
    <MyForm />

    {/* Package Gallery */}
    <h2 className="my-4">Package Gallery</h2>
    <PackageGallery />

    {/* Services Section */}
    <h2 className="my-4">Our Services</h2>
    <ServicesSection />
  </Container>
);

export default BookingForm;
