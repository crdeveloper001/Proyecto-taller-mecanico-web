import React from "react";
import { Nav, NavDropdown, Navbar, Button } from "react-bootstrap";

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="dashboard">TALLER MECANICO APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Inventories" id="basic-nav-dropdown">
            <NavDropdown.Item href="replacements">
              Replacements
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="tools">Tools</NavDropdown.Item>
            
          </NavDropdown>
          <NavDropdown title="Clients" id="basic-nav-dropdown">
            <NavDropdown.Item href="Clients">
              View Current Clients
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="add-new-client">Add New Client</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="providers" className="d-flex">
            Providers
          </Nav.Link>
          
          
          <Nav.Link href="Profile" className="d-flex">
            My Profile
          </Nav.Link>
        </Nav>

        <Nav.Link
          href="/"
          onClick={() => {
            localStorage.clear();
          }}
        >
          <Button variant="link" size="md">
            Log Out
          </Button>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
