import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import logo from "../assests/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Brand Logo"
              className="d-inline-block align-top"
              style={{ width: 60, height: 50 }}
            />
            Travel Spot
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Left side navigation items */}
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/booking">Book</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="Packages" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#usa">United States</NavDropdown.Item>
                  <NavDropdown.Item href="#india">India</NavDropdown.Item>
                  <NavDropdown.Item href="#france">France</NavDropdown.Item>
                  <NavDropdown.Item href="#germany">Germany</NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#services">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/gallery" >Gallery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/aboutUs" >About</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Right side buttons */}
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link href="#login">
                  <Button variant="outline-primary" >
                    Login
                  </Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#register">
                  <Button variant="primary">Register</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
