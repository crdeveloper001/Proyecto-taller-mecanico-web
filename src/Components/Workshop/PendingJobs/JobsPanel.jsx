import React from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Tab, Tabs } from "react-bootstrap";
import { NewJobs } from "./NewJobs/NewJobs.jsx";
import { JobsInProgress } from "./JobsInProgress/JobsInProgress.jsx";
import { JobsCompleted } from "./JobsCompleted/JobsCompleted.jsx";
import useJobsSettings from '../../../Hooks/useJobsSettings.js'

export const JobsPanel = () => {
    const { getCurrentJobs } = useJobsSettings();
    getCurrentJobs()


    return (
        <div>
            <Navigation />
            <div className="container mt-3">
                <h3 className="text-dark">CURRENT PENDING JOBS</h3>
                <hr />
                <Tabs
                    defaultActiveKey="NewJobs"
                    id="jobs-tabs"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="NewJobs" title="New Jobs">
                        <NewJobs />
                    </Tab>
                    <Tab eventKey="InProgressJobs" title="In Progress">
                        <JobsInProgress />
                    </Tab>
                    <Tab eventKey="CompletedJobs" title="Completed">
                        <JobsCompleted />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};
