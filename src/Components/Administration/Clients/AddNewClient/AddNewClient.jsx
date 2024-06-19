import React from "react";
import {Navigation} from "../../../../Routes/Navigation/Navigation";
import {Button, Container, Form} from "react-bootstrap";
import useClientsSettings from "../../../../Hooks/useClientsSettings";
import {useNavigate} from "react-router-dom";

export const AddNewClient = () => {
  const appNavigation = useNavigate()
  const { newClient, saveNewClient, createNewClient } = useClientsSettings()

  return (
    <div>
      <Navigation />
      <Container>
        <h2>Add new client to system</h2>
        <Form id="GeneralForm">
          <Form.Group controlId="InputId">
            <Form.Label>Identification</Form.Label>
            <Form.Control
              required
              type="number"
              maxLength={9}
              placeholder="Enter your id"
              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your first name"
              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your last name"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email address"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter your phone number"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your address"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your city"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputState">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter your state"

              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <Form.Group controlId="InputZipcode">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter your zipcode"
              onChange={(e) => { saveNewClient(e) }}
            />
          </Form.Group>
          <hr />
          <Button variant="primary" type="button" className="mt-2" onClick={createNewClient} >
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
};
