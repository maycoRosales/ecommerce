import React from 'react';
import { Link } from 'react-router-dom';
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
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faBurger} />
                    {' '}BurgerShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to={'/category/Meat'}>Meat</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/category/Chicken'}>Chicken</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/category/Pork'}>Pork</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/category/Fish'}>Fish</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item ><Link to={'/category/Vegee'}>Vegee</Link></NavDropdown.Item>
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