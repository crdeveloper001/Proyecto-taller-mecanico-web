import React, { useState } from 'react'
import { Accordion, Button, Nav, Offcanvas, NavDropdown } from 'react-bootstrap';
import './index.css'
import { useNavigate } from 'react-router-dom';

export const SideBarMenu = ({ openSideMenu }) => {
    const appNavigator = useNavigate()
    const [show, setShow] = useState(openSideMenu);
    const handleClose = () => setShow(false);

    return (
        <>
            <Offcanvas className={"side-bar-menu"} show={show} onHide={handleClose} scroll={true} backdrop={false}>
                <Offcanvas.Header closeButton>
                    <Button variant="primary" size="sm" onClick={() => appNavigator('/dashboard')}>
                        Go Home
                    </Button>
                    <Button variant="success" size="sm" onClick={() => appNavigator('/profile')}>
                        My Profile
                    </Button>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="flex-column">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Workshop</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="/pending-jobs">Current Jobs</Nav.Link>
                                    </Nav>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Clients</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="add-new-client">Add New Client</Nav.Link>
                                        <Nav.Link href="clients">View Clients</Nav.Link>
                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Inventories</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="inventories">Review</Nav.Link>

                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                           
                            
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Vehicles Diagnostics</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="providers">Current Diagnostics</Nav.Link>

                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Customer Quotes</Accordion.Header>
                                <Accordion.Body>
                                    <Nav className="flex-column">
                                        <Nav.Link href="providers">Current Quotes</Nav.Link>

                                    </Nav>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                    </Nav>

                    <hr />
                    <Nav.Link className='mt-4'
                        href="/"
                        onClick={() => {
                            sessionStorage.clear();
                        }}
                    >
                        <Button variant="danger" size="sm">
                            Close Session
                        </Button>
                    </Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};