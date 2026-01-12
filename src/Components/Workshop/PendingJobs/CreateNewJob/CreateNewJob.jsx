import { useEffect } from "react";
import { Form, Button, Col, Row, Alert, Card, Modal } from "react-bootstrap";
import useJobsSettings from "../../../../Hooks/useJobsSettings.js";

export const CreateNewJob = ({ show, handleCloseCreateNewJob, userData }) => {
  const { statusCreated, newJob, saveNewClient, addNewJob } = useJobsSettings();

  useEffect(() => {
    newJob.ClientInformation = userData;
  }, [newJob]);

  return (
    <Modal show={show} onHide={handleCloseCreateNewJob} size="xl" fullscreen="lg-down">
      <Modal.Header closeButton>
        <Modal.Title>Create task for: <strong>{userData.Name} {userData.Surname}</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Row className="g-3">
          {/* Customer & Vehicle Info */}
          <Col lg={6}>
            <Card className="shadow-sm border-primary h-100">
              <Card.Header className="bg-primary text-white fw-bold">
                📋 Customer Information
              </Card.Header>
              <Card.Body>
                <Card className="mb-3">
                  <Card.Body>
                    <Card.Title className="text-primary">Client Details</Card.Title>
                    <hr />
                    <p><strong>ID:</strong> {userData._id}</p>
                    <p><strong>Name:</strong> {userData.Name} {userData.Surname}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${userData.Email}`}>{userData.Email}</a></p>
                    <p><strong>Phone:</strong> <a href={`tel:+${userData.Phone}`}>{userData.Phone}</a></p>
                    <p><strong>Address:</strong> {userData.CurrentAddress}</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Card.Title className="text-primary">🚗 Vehicle Details</Card.Title>
                    <hr />
                    <p><strong>Brand:</strong> {userData.VehicleDetails?.Brand || "N/A"}</p>
                    <p><strong>Model:</strong> {userData.VehicleDetails?.Model || "N/A"}</p>
                    <p><strong>Type:</strong> {userData.VehicleDetails?.Type || "N/A"}</p>
                    <p><strong>Engine:</strong> {userData.VehicleDetails?.EngineCapacity || "N/A"}</p>
                    <p><strong>Plate:</strong> {userData.VehicleDetails?.RegistrationPlate || "N/A"}</p>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>

          {/* Job Form */}
          <Col lg={6}>
            <Card className="shadow-sm border-primary h-100">
              <Card.Header className="bg-primary text-white fw-bold">
                ⚙️ Task Details
              </Card.Header>
              <Card.Body>
                <Form onSubmit={addNewJob}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="job_Name"
                      placeholder="e.g., Engine Oil Change"
                      onChange={saveNewClient}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Job Description *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="job_Description"
                      placeholder="Enter detailed description..."
                      onChange={saveNewClient}
                      required
                    />
                  </Form.Group>

                  <Row className="g-2">
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Status *</Form.Label>
                        <Form.Select name="job_Status" onChange={saveNewClient} required>
                          <option value="">Choose...</option>
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Job Type *</Form.Label>
                        <Form.Select name="job_Type" onChange={saveNewClient} required>
                          <option value="">Select type...</option>
                          <option value="Hands-on">Hands-on</option>
                          <option value="Diagnostic">Diagnostic</option>
                          <option value="Preventive Maintenance">Preventive Maintenance</option>
                          <option value="Repair">Repair</option>
                          <option value="Inspection">Inspection</option>
                          <option value="Installation">Installation</option>
                          <option value="Software Update">Software Update</option>
                          <option value="Cleaning">Cleaning</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-2">
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="job_Start_Date"
                          onChange={saveNewClient}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="job_End_Date"
                          onChange={saveNewClient}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      name="job_Location"
                      placeholder="e.g., Bay 3"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Assigned To</Form.Label>
                    <Form.Control
                      type="text"
                      name="job_Assigned"
                      placeholder="Technician name"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  {statusCreated && (
                    <Alert variant="success" dismissible className="mb-3">
                      ✅ Job created successfully!
                    </Alert>
                  )}

                  <Button variant="primary" type="submit" className="w-100">
                    Create Job
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCreateNewJob}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
