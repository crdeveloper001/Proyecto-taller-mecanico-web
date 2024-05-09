import React from 'react'
import { Nav,NavDropdown,Navbar } from 'react-bootstrap'

export const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">TALLER MECANICO APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <NavDropdown title="Inventarios" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/1">Repuestos</NavDropdown.Item>
          <NavDropdown.Item href="#action/2">Herramientas</NavDropdown.Item>
          <NavDropdown.Item href="#action/2">Provedores</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#sessions">Clientes</Nav.Link>
        <Nav.Link href="#participants" className='d-flex'>Mi Perfil</Nav.Link>
        <Nav.Link href="/" onClick={() =>{
            localStorage.clear();
        }}>Cerrar Sesion</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}
