import React from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Tab, Tabs } from "react-bootstrap";
import { NewJobs } from "./NewJobs/NewJobs.jsx";
import { JobsInProgress } from "./JobsInProgress/JobsInProgress.jsx";
import { JobsCompleted } from "./JobsCompleted/JobsCompleted.jsx";
import useJobsSettings from '../../../Hooks/useJobsSettings.js'

export const JobsPanel = () => {
    const { filteredJobs, filterStatusJobs, getCurrentJobs } = useJobsSettings();
    getCurrentJobs()

    const FilteringDataJobs = (status) => {

        switch (status) {
            case "New":
                filterStatusJobs(status)
                break;
            case "In Progress":
                filterStatusJobs(status)
                break;
            case "Completed":
                filterStatusJobs(status)
                break;

        }
    }

    return (
        <div>
            <Navigation />
            <h3 className="text-dark mt-3">
                CURRENT PENDING JOBS
            </h3>
            <hr />
            <Tabs
                defaultActiveKey="NewJobs"
                id="fill-tab-example"
                className="mb-3"
                fill>
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
    );
};
