import React, {useEffect, useState} from "react";
import {Navigation} from "../../../Routes/Navigation/Navigation";
import {Tab, Tabs} from "react-bootstrap";

export const PendingJobs = () => {

    return (
        <div>
            <Navigation/>
            <h3 className="text-dark mt-3">
                CURRENT PENDING JOBS
            </h3>
            <hr/>
            <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill>
                <Tab eventKey="home" title="New Jobs">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="In Progress">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="contact" title="Completed">
                    Tab content for Contact
                </Tab>
            </Tabs>
        </div>
    );
};
