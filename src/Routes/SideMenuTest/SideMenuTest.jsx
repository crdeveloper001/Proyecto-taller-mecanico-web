import React, {useState} from 'react';
import { Nav, Navbar,NavDropdown, Container,Button } from 'react-bootstrap';

export const SideMenuTest = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{display: 'flex', height: '100vh'}}>
            <Navbar
                bg="light"
                expand="lg"
                className="flex-column"
                style={{width: expanded ? '250px' : '60px', transition: 'width 0.3s'}}
            >
                <Container fluid>
                    <Button
                        variant="outline-secondary"
                        onClick={() => setExpanded(!expanded)}
                        style={{marginBottom: '10px'}}
                    >
                        {expanded ? '<<' : '>>'}
                    </Button>
                    <Navbar.Brand href="#home" className={expanded ? '' : 'd-none'}>
                        Brand
                    </Navbar.Brand>
                    <Nav className="flex-column">
                        <Nav.Link href="#home" className={expanded ? '' : 'd-none'}>
                            Home
                        </Nav.Link>
                        <NavDropdown title="Features" id="basic-nav-dropdown" className={expanded ? '' : 'd-none'}>
                            <NavDropdown.Item href="#feature1">Feature 1</NavDropdown.Item>
                            <NavDropdown.Item href="#feature2">Feature 2</NavDropdown.Item>
                            <NavDropdown.Item href="#feature3">Feature 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing" className={expanded ? '' : 'd-none'}>
                            Pricing
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}