import React from 'react'
import { Button, Modal, Card } from 'react-bootstrap';

export const ClientsDetails = ({ show, handleCloseUserInformation, userData }) => {

  return (
    <Modal show={show} onHide={handleCloseUserInformation}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>

          <Card.Body>
            <Card.Text>
              <hr />
              <h5>Client Details</h5>
              <p><strong>Identification:</strong> {userData._id}</p>
              <p><strong>Name:</strong> {userData.Name}</p>
              <p><strong>Surname:</strong> {userData.Surname}</p>
              <p><strong>Email:</strong> <a href={`mailto: ${userData.Email}`}>{userData.Email}</a></p>
              <p><strong>Phone:</strong> <a href={`tel:+${userData.Phone}`}>{userData.Phone}</a> </p>
              <p><strong>Current Address:</strong> {userData.CurrentAddress}</p>
              <hr />
              <h5>Vehicle Details</h5>
              <p><strong>Brand:</strong> {userData.VehicleDetails?.Brand}</p>
              <p><strong>Model:</strong> {userData.VehicleDetails?.Model}</p>
              <p><strong>Type:</strong> {userData.VehicleDetails?.Type}</p>
              <p><strong>Engine Capacity:</strong> {userData.VehicleDetails?.EngineCapacity}</p>
              <p><strong>Registration Plate:</strong> {userData.VehicleDetails?.RegistrationPlate}</p>
              <hr />

            </Card.Text>
          </Card.Body>
        </Card>


      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseUserInformation}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
