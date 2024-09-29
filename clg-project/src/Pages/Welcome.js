import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
    const countries = ['USA', 'Canada', 'Australia', 'Germany', 'India', 'Brazil'];
    const [currentCountry, setCurrentCountry] = useState(0);
    const navigate = useNavigate();

  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentCountry((prevCountry) => (prevCountry + 1) % countries.length);
      }, 200); 
  
      return () => clearInterval(intervalId);
    }, [countries.length]);
  return (
    <div>
    {/* Background Image Section */}
    <div
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/01/38/43/93/360_F_138439340_obSGtNAiU443XmNZNo59XVU7lculngeS.jpg')`, // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Heading 1: Welcome to BrandName */}
      <h1>Welcome to Travel Spot</h1>

      {/* Heading 2: Dynamic country name */}
      <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>
        Visit {countries[currentCountry]}
      </h2>

      {/* Button: Book Now */}
      <Button
        variant="primary"
        size="lg"
        style={{ marginTop: '20px' }}
        onClick={()=>{navigate('/booking')}}
      >
        Book Now
      </Button>
    </div>
  </div>
  )
}
