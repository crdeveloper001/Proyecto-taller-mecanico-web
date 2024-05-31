import React from 'react'
import { Modal, Button } from 'react-bootstrap';

export const ClientsDetails = ({ show, handleClose, userData }) => {


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>ID:</strong> {userData._id}</p>
        <p><strong>Name:</strong> {userData.Name}</p>
        <p><strong>Surname:</strong> {userData.Surname}</p>
        <p><strong>Email:</strong> {userData.Email}</p>
        <p><strong>Phone:</strong> {userData.Phone}</p>
        <p><strong>Current Address:</strong> {userData.CurrentAddress}</p>
        <p><strong>City:</strong> {userData.City}</p>
        <p><strong>State:</strong> {userData.State}</p>
        <p><strong>Zipcode:</strong> {userData.Zipcode}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
