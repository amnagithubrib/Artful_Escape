import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon
import logo from '../img/logo.webp'; // Adjust the path based on your project structure
import './MyNavbar.css'; // Import your CSS file

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo} // Your logo image
            alt="V-Academy Logo"
            width="180"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="custom-font"><b>SHOP</b></Nav.Link>
            <Nav.Link href="#courses" className="custom-font"><b>EVENTS</b></Nav.Link>
            <Nav.Link href="#articles" className="custom-font"><b>ARTICLES</b></Nav.Link>
            <Nav.Link href="#portfolio" className="custom-font"><b>PORTFOLIO</b></Nav.Link>
            <Nav.Link href="#about" className="custom-font"><b>ABOUT</b></Nav.Link>
            <Nav.Link href="#contact" className="custom-font"><b>CONTACT</b></Nav.Link>

            {/* Cart Icon */}
            <Nav.Link href="#cart" className="custom-font">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: '#fcc510', fontSize: '50px' }} // Set icon size and color
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
