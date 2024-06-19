import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { Navigation } from '../../../../Routes/Navigation/Navigation';
export const CreateNewJob = () => {
    return (
        <>
            <Navigation />
            <Container>
                <h1>Create New Job</h1>
                <hr />
                <Form>

                    <Form.Group controlId="InputJobName">
                        <Form.Label>Job Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="job_Name"
                            placeholder="Enter job name"
                        />
                    </Form.Group>

                    <Form.Group controlId="InputJobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>

                    <Form.Group controlId="InputJobStatus">
                        <Form.Label>Job Status</Form.Label>
                        <Form.Control as="select" name="job_Status">
                            <option disabled>Choose...</option>
                            <option>New</option>
                            <option>In Progress</option>
                            <option>Completed</option>

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="InputJobType">
                        <Form.Label>Job Type</Form.Label>
                        <Form.Control as="select" name="job_Type">
                            <option value="Hands-on">Hands-on</option>
                            <option value="Diagnostic">Diagnostic</option>
                            <option value="Preventive Maintenance">Preventive Maintenance</option>
                            <option value="Repair">Repair</option>
                            <option value="Inspection">Inspection</option>
                            <option value="Installation">Installation</option>
                            <option value="Software Update">Software Update</option>
                            <option value="Cleaning">Cleaning</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="Other">Other</option>

                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="InputJobStartDate">
                        <Form.Label>Job Start Date</Form.Label>
                        <Form.Control

                            type="datetime-local"
                            name="job_Start_Date"
                        />
                    </Form.Group>

                    <Form.Group controlId="InputJobEndDate">
                        <Form.Label>Job End Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="job_End_Date"
                        />
                    </Form.Group>

                    <Form.Group controlId="InputJobLocation">
                        <Form.Label>Job Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="job_Location"
                            placeholder="Enter job location"
                        />
                    </Form.Group>

                    <Form.Group controlId="InputJobAssigned">
                        <Form.Label>Job Assigned</Form.Label>
                        <Form.Control
                            type="text"
                            name="job_Assigned"
                            placeholder="Enter name of assigned person"
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Container>
        </>
    )
}
