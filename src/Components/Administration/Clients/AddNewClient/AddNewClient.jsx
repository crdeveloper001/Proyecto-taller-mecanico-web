import React from "react";
import { Navigation } from "../../../../Routes/Navigation/Navigation";
import { Button, Container, Form, Card, Row, Col,Alert } from "react-bootstrap";
import { RiAddLargeLine } from "react-icons/ri";
import useClientsSettings from "../../../../Hooks/useClientsSettings";
import BrandVehicles from '../../../../assets/utils/BrandVehicles.json';
import { cilindradas } from '../../../../assets/utils/CylindersNumbers.json'
import { tipos_vehiculos } from '../../../../assets/utils/TypeVehicles.json'
import { useNavigate } from "react-router-dom";

export const AddNewClient = () => {
  const appNavigation = useNavigate()
  const { newClient,confirmationAdded, saveNewClient, createNewClient } = useClientsSettings()

  return (
    <div>

      <Navigation />
      <Container>

        <Card>
          <Card.Header>
            <strong>Add client to the system</strong>
          </Card.Header>
          <Card.Body>
            <Form id="GeneralForm">
              <Row md={2}>
                <Col md={6}>
                  <h5>Client Information</h5>
                  <Form.Group controlId="InputId">
                    <Form.Label>Identification *9 digits</Form.Label>
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
                  <hr />
                </Col>
                <Col md={6}>
                  <h5>Vehicle Information</h5>
                  <Form.Group controlId="InputVehicleBrand">
                    <Form.Label>Vehicle Brand</Form.Label>
                    <Form.Control
                      as="select"
                      name="vehicle_Brand"
                      onChange={(e) => { saveNewClient(e) }}
                    >
                      {BrandVehicles.map(items => {
                        return (
                          <>
                            <option key={items.id} value={items.name}>{items.name}</option>
                          </>
                        )
                      })}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="InputVehicleModel">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => { saveNewClient(e) }}
                    />
                  </Form.Group>

                  <Form.Group controlId="InputVehicleType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={(e) => { saveNewClient(e) }}
                    >
                      <option disabled>Choose...</option>
                      {tipos_vehiculos.map(items => {
                        return (
                          <>
                            <option value={items.tipo}>{items.tipo}</option>
                          </>
                        )
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="InputVehicleCapacity">
                    <Form.Label>Engine Capacity</Form.Label>
                    <Form.Control
                      as="select"
                      name="job_Status"
                      onChange={(e) => { saveNewClient(e) }}
                    >
                      <option disabled>Choose...</option>
                      {cilindradas.map(items => {
                        return (
                          <>

                            <option value={items}>{items}</option>
                          </>
                        )
                      })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="InputVehicleRegistrationPlate">
                    <Form.Label>Registration Plate</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      onChange={(e) => { saveNewClient(e) }}
                    />
                  </Form.Group>

                </Col>
                <Button variant="success" type="button" className="mt-2" onClick={createNewClient} >
                Save New Client
              </Button>
             
              </Row>
             
            </Form>
          </Card.Body>
        </Card>

        {confirmationAdded ?  <Alert variant="success" dismissible className="mt-2">
              Client {newClient.Name} was added 
            </Alert> :""}
       
      </Container>
    </div>
  );
};
