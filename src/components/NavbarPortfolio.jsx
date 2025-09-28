import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/NavbarPortfolio.css';

function NavbarPortfolio() {
  return (
    <Navbar expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand href="#home" className="my-navbar-brand">
          Portfolio Samuel Dorven
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto my-navbar-nav">
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPortfolio;
