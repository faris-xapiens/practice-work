import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom"


const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/component-one">
                  Component One
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/component-two">
                Component Two
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/component-three">
                Component Three
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarMenu
