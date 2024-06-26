import React, { useEffect, useState } from "react";
import { Button, Navbar } from "react-bootstrap";
import { SideBarMenu } from "../SideBarMenu/SideBarMenu";
import useProfileSettings from '../../Hooks/useProfileSettings.js'

export const Navigation = () => {
    const { profileInformation, currentSession } = useProfileSettings();
    const [activeSideBar, setActiveSideBar] = useState(false);
    //getCurrentSession()

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
                        Signed as: {currentSession?.Payload?.Name}
                       
                    </Navbar.Text>


                </Navbar.Collapse>


            </Navbar>

            {activeSideBar ? <SideBarMenu openSideMenu={true} /> : ""}

        </>)
}