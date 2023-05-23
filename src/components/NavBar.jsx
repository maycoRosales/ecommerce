import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <Navbar bg="warning" variant="light" expand="lg" sticky="top"> 
            <Container >
                <Navbar.Brand href="#home">
                    <FontAwesomeIcon icon={faBurger} />
                    {' '}BurgerShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Burgers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/2.1">Meat</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.2">Chicken</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2.3">Pork</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/2.4">Vegee</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Fries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">French Fries</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Nuggets</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">More</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar