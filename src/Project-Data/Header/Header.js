import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
return (
    <Navbar expand="lg" className="bg-navbar" style={{height:"80px"}}>
        <Container fluid>
            <Navbar.Brand href="#" className='brand-name'>fcai union</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='small-view' >
            <Nav className="Links-style" style={{ maxHeight: '100px' }}  >
                <Nav.Link>
                    <NavLink to='/home' style={{textDecoration:"none"}}>Home</NavLink>
                </Nav.Link>
                <Nav.Link >
                <NavLink to='/register' style={{textDecoration:"none"}}>Register</NavLink>
                </Nav.Link>
                <Nav.Link >
                    <NavLink to='/letsgo'  style={{textDecoration:"none"}}>Let's go</NavLink>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}
// me-auto my-2 my-lg-0

export default React.memo(Header);

