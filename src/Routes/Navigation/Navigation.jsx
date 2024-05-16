import React from 'react'
import { Nav, NavDropdown, Navbar, Button } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="Dashboard-App">TALLER MECANICO APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Current Inventories" id="basic-nav-dropdown">
            <NavDropdown.Item href="replacements">Vehicule replacements</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="tools">My tools</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="providers">Current Providers</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="Clients">Clients</Nav.Link>
          <Nav.Link href="Profile" className='d-flex'>My Profile</Nav.Link>

        </Nav>
       
        <Nav.Link href="/" onClick={() => {
          localStorage.clear();
        }}><Button variant="link" size="md" >
            Log Out
          </Button></Nav.Link>
      </Navbar.Collapse>

    </Navbar>
  )
}
