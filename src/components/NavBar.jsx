import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="warning" variant="light" expand="lg" sticky="top"> 
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="hamburger"
                        src="./hamburger.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    {' '}BurgerShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-center flex-grow-1 pe-3" >
                        <Nav.Link><Link id='home-link' className='link-nav' to={'/'}>Home</Link></Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown" menuVariant="dark">
                            <NavDropdown.Item ><Link className='link-nav' to={'/category/Meat'}>Meat</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className='link-nav' to={'/category/Chicken'}>Chicken</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className='link-nav' to={'/category/Pork'}>Pork</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link className='link-nav' to={'/category/Fish'}>Fish</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item ><Link className='link-nav' to={'/category/Vegee'}>Vegee</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><Link id='fries-link' className='link-nav' to={'/category/Fries'}>Fries</Link></Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar