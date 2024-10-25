import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import useProfileSettings from '../../Hooks/useProfileSettings.js';
import './index.css';

export const Navigation = () => {
    const { currentSession } = useProfileSettings();
    const [activeSideBar, setActiveSideBar] = useState(false);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Button variant="primary" size="sm" href="/dashboard">
                        Go Home
                    </Button>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setActiveSideBar(!activeSideBar)} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Workshop" id="workshop-dropdown">
                            <NavDropdown.Item href="/pending-jobs">
                                Current Jobs
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Clients" id="clients-dropdown">
                            <NavDropdown.Item href="/add-new-client">
                                Add New Client
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/clients">
                                View Clients
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Inventories" id="inventories-dropdown">
                            <NavDropdown.Item href="/inventory-dashboard">
                                Review
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Vehicles Diagnostics" id="diagnostics-dropdown">
                            <NavDropdown.Item href="/providers">
                                Current Diagnostics
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Customer Quotes" id="quotes-dropdown">
                            <NavDropdown.Item href="/providers">
                                Current Quotes
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Navbar.Text className="me-3">
                            Signed as: {currentSession?.Payload?.Name}
                        </Navbar.Text>
                        <Button variant="success" size="sm" href="/profile">
                            My Profile
                        </Button>
                        <Button
                            variant="danger"
                            size="sm"
                            className="ms-2"
                            onClick={() => {
                                sessionStorage.clear();
                                window.location.href = '/';
                            }}
                        >
                            Close Session
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
