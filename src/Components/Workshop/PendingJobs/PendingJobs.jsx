import React, { useEffect, useState } from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Table, Button, Modal, Accordion, Card } from "react-bootstrap";

export const PendingJobs = () => {
  const [pendingJobs, setPendingJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mock pending jobs data
    const mockPendingJobs = [
      {
        id: 1,
        vehicle: {
          Brand: "Toyota",
          Type: "Car",
          EngineCapacity: 2000,
          RegistrationPlate: "ABC123",
          CurrentState: "Working",
        },
        description: "Engine check",
        status: "Pending",
        requiredParts: [
          { part: "Spark plugs", quantity: 4, price: 10 },
          { part: "Oil filter", quantity: 1, price: 8 },
        ],
      },
      {
        id: 2,
        vehicle: {
          Brand: "Ford",
          Type: "Truck",
          EngineCapacity: 3000,
          RegistrationPlate: "XYZ789",
          CurrentState: "Damaged",
        },
        description: "Brake repair",
        status: "Pending",
        requiredParts: [
          { part: "Brake pads", quantity: 2, price: 30 },
          { part: "Brake discs", quantity: 2, price: 40 },
        ],
      },
      // Additional pending jobs...
    ];

    setPendingJobs(mockPendingJobs);
  }, []);

  const viewDetails = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navigation />
      <h3 className="text-center text-light">
        CURRENT PENDING JOBS: {pendingJobs.length}
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingJobs.map((job) => {
            return (
              <tr key={job.id}>
                <td>{job.id}</td>
                <td>{job.description}</td>
                <td>{job.status}</td>
                <td>
                  <Button variant="primary" onClick={() => viewDetails(job)}>
                    View Details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Modal for displaying job details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Job ID: {selectedJob?.id}</p>
          <p>Description: {selectedJob?.description}</p>
          <p>Status: {selectedJob?.status}</p>
          <p>Vehicle Brand: {selectedJob?.vehicle.Brand}</p>
          <p>Vehicle Type: {selectedJob?.vehicle.Type}</p>
          <p>Engine Capacity: {selectedJob?.vehicle.EngineCapacity}</p>
          <p>Registration Plate: {selectedJob?.vehicle.RegistrationPlate}</p>
          <p>Current State: {selectedJob?.vehicle.CurrentState}</p>

          {/* Accordion for repair parts */}
          <Accordion>
            <Card>
             
              <Accordion.Collapse >
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Part</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedJob?.requiredParts.map((part, index) => (
                        <tr key={index}>
                          <td>{part.part}</td>
                          <td>{part.quantity}</td>
                          <td>{part.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
