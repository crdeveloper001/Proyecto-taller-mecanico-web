import React, { useEffect } from "react";
import { Form, Button, Col, Row, Alert, Card, Modal } from "react-bootstrap";
import { Navigation } from "../../../../Routes/Navigation/Navigation";
import useJobsSettings from "../../../../Hooks/useJobsSettings.js";

export const CreateNewJob = ({ show, handleCloseCreateNewJob, userData }) => {
  const { statusCreated, newJob, saveNewClient, addNewJob } = useJobsSettings();

  useEffect(() => {
    newJob.ClientInformation = userData;
   
  }, [newJob])

  return (
    <>
      <Modal show={show} onHide={handleCloseCreateNewJob} size="xl" fullscreen="xl-down">
        <Modal.Header closeButton>
          <Modal.Title as={'span'}>Create task for customer: <strong>{userData.Name}</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card >
            <Card.Body>
              <Row md={2}>
                <Col md={6}>
                  <Card border="primary" className="my-3 shadow-sm">
                    <Card.Header className="bg-primary text-white">Customer Information</Card.Header>
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card className="mb-3">
                            <Card.Body>
                              <Card.Title>Client Details</Card.Title>
                              <Card.Text as="div">
                                <hr />
                                <p><strong>Identification:</strong> {userData._id}</p>
                                <p><strong>Name:</strong> {userData.Name}</p>
                                <p><strong>Surname:</strong> {userData.Surname}</p>
                                <p><strong>Email:</strong> <a href={`mailto:${userData.Email}`}>{userData.Email}</a></p>
                                <p><strong>Phone:</strong> <a href={`tel:+${userData.Phone}`}>{userData.Phone}</a></p>
                                <p><strong>Current Address:</strong> {userData.CurrentAddress}</p>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                          <Card>
                            <Card.Body>
                              <Card.Title>Vehicle Details</Card.Title>
                              <Card.Text as="div">
                                <hr />
                                <p><strong>Brand:</strong> {userData.VehicleDetails?.Brand}</p>
                                <p><strong>Model:</strong> {userData.VehicleDetails?.Model}</p>
                                <p><strong>Type:</strong> {userData.VehicleDetails?.Type}</p>
                                <p><strong>Engine Capacity:</strong> {userData.VehicleDetails?.EngineCapacity}</p>
                                <p><strong>Registration Plate:</strong> {userData.VehicleDetails?.RegistrationPlate}</p>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card  border="primary" className="my-3 shadow-sm">
                    <Card.Header className="bg-primary text-white">Task Details</Card.Header>
                    <Card.Body>
                      <Form onSubmit={addNewJob}>
                        <Form.Group controlId="InputJobName">
                          <Form.Label>Job Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="job_Name"
                            placeholder="Enter job name"
                            onChange={saveNewClient}
                          />
                        </Form.Group>

                        <Form.Group controlId="InputJobDescription">
                          <Form.Label>Job Description</Form.Label>
                          <Form.Control as="textarea" rows={4} onChange={saveNewClient} />
                        </Form.Group>

                        <Form.Group controlId="InputJobStatus">
                          <Form.Label>Job Status</Form.Label>
                          <Form.Control
                            as="select"
                            name="job_Status"
                            onChange={saveNewClient}
                          >
                            <option selected>Choose...</option>
                            <option value={"New"}>New</option>
                            <option value={"In Progress"}>In Progress</option>
                            <option value={"Completed"}>Completed</option>
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="InputJobType">
                          <Form.Label>Job Type</Form.Label>
                          <Form.Control as="select" name="job_Type" onChange={saveNewClient}>
                            <option value="Hands-on">Hands-on</option>
                            <option value="Diagnostic">Diagnostic</option>
                            <option value="Preventive Maintenance">
                              Preventive Maintenance
                            </option>
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
                            onChange={saveNewClient}
                          />
                        </Form.Group>

                        <Form.Group controlId="InputJobEndDate">
                          <Form.Label>Job End Date</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="job_End_Date"
                            onChange={saveNewClient}
                          />
                        </Form.Group>

                        <Form.Group controlId="InputJobLocation">
                          <Form.Label>Job Location</Form.Label>
                          <Form.Control
                            type="text"
                            name="job_Location"
                            placeholder="Enter job location"
                            onChange={saveNewClient}
                          />
                        </Form.Group>

                        <Form.Group controlId="InputJobAssigned">
                          <Form.Label>Job Assigned</Form.Label>
                          <Form.Control
                            type="text"
                            name="job_Assigned"
                            placeholder="Enter name of assigned person"
                            onChange={saveNewClient}
                          />
                        </Form.Group>

                        <Button className="mt-2" variant="primary" type="submit">
                          Create
                        </Button>
                        <br />
                        {statusCreated ? <Alert variant="success" dismissible >
                          JOB CREATED!
                        </Alert> : ""}
                      </Form>
                    </Card.Body>
                  </Card>


                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreateNewJob}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
};
