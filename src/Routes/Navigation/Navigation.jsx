import React, {useState, useEffect} from "react";
import { Navbar, Button} from "react-bootstrap";
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

        </>)
}