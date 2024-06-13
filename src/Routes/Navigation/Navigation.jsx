<<<<<<< Updated upstream
import React, {useState, useEffect} from "react";
import {Nav, NavDropdown, Navbar, Button} from "react-bootstrap";
import {SideBarMenu} from "../SideBarMenu/SideBarMenu";
import useProfileSettings from '../../Hooks/useProfileSettings.js'

export const Navigation = () => {
    const {profileInformation, getCurrentSession} = useProfileSettings();
    const [activeSideBar, setActiveSideBar] = useState(false);
    getCurrentSession()
    useEffect(() => {
        console.log(profileInformation)
    }, [profileInformation]);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Button variant="dark" size="sm" onClickCapture={() => {
                    if (activeSideBar) {
                        setActiveSideBar(false)
                    } else {
                        setActiveSideBar(true)
                    }
                }}>
                    Menu
                </Button>
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Signed as: {profileInformation.Name}
                    </Navbar.Text>
                </Navbar.Collapse>


            </Navbar>

            {activeSideBar ? <SideBarMenu openSideMenu={true}/> : ""}

        </>
=======
import React from "react";
import {Nav, NavDropdown, Navbar, Button} from "react-bootstrap";
import {SideMenuTest} from "../SideMenuTest/SideMenuTest.jsx";

export const Navigation = () => {
    return (
        <div>
            <SideMenuTest/>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="dashboard">TALLER MECANICO APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Inventories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="replacements">
                                Replacements
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="tools">Tools</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Clients" id="basic-nav-dropdown">
                            <NavDropdown.Item href="Clients">
                                View Current Clients
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="add-new-client">Add New Client</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Providers" id="basic-nav-dropdown">
                            <NavDropdown.Item href="replacements">
                                View Current Providers
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="tools">Add New Providers</NavDropdown.Item>

                        </NavDropdown>


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
        </div>

>>>>>>> Stashed changes
    );
};
