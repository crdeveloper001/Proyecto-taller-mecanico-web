import { Navigation } from "../../../../Routes/Navigation/Navigation";
import { Button, Container, Form, Card, Row, Col, Alert } from "react-bootstrap";
import useClientsSettings from "../../../../Hooks/useClientsSettings";
import BrandVehicles from '../../../../assets/utils/BrandVehicles.json';
import { cilindradas } from '../../../../assets/utils/CylindersNumbers.json'
import { tipos_vehiculos } from '../../../../assets/utils/TypeVehicles.json'

export const AddNewClient = () => {
  const { newClient, confirmationAdded, saveNewClient, createNewClient } = useClientsSettings()

  return (
    <div>
      <Navigation />
      <Container className="py-5">
        <Card className="shadow-lg border-0">
          <Card.Header className="bg-primary text-white py-4">
            <h4 className="mb-0">➕ Add New Client</h4>
          </Card.Header>
          <Card.Body className="p-5">
            <Form id="GeneralForm">
              <Row className="g-4">
                {/* Client Information Section */}
                <Col lg={6}>
                  <h5 className="text-primary mb-4 pb-3 border-bottom">👤 Client Information</h5>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">ID Number *</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter 9-digit ID"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">First Name *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter first name"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Last Name *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter last name"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email Address *</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      placeholder="example@email.com"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone Number *</Form.Label>
                    <Form.Control
                      required
                      type="tel"
                      placeholder="Enter phone number"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Address *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter full address"
                      onChange={saveNewClient}
                    />
                  </Form.Group>
                </Col>

                {/* Vehicle Information Section */}
                <Col lg={6}>
                  <h5 className="text-primary mb-4 pb-3 border-bottom">🚗 Vehicle Information</h5>
                  
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Vehicle Brand *</Form.Label>
                    <Form.Control
                      as="select"
                      name="vehicle_Brand"
                      onChange={saveNewClient}
                    >
                      <option disabled selected>Select brand...</option>
                      {BrandVehicles.map((items) => (
                        <option key={items.name} value={items.name}>{items.name}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Model *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter vehicle model"
                      onChange={saveNewClient}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Vehicle Type *</Form.Label>
                    <Form.Control
                      as="select"
                      onChange={saveNewClient}
                    >
                      <option disabled selected>Select type...</option>
                      {tipos_vehiculos.map((items) => (
                        <option key={items.tipo} value={items.tipo}>{items.tipo}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Engine Capacity *</Form.Label>
                    <Form.Control
                      as="select"
                      name="job_Status"
                      onChange={saveNewClient}
                    >
                      <option disabled selected>Select capacity...</option>
                      {cilindradas.map((items) => (
                        <option key={items} value={items}>{items}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Registration Plate *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter registration plate"
                      onChange={saveNewClient}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="d-flex gap-2 mt-4">
                <Button 
                  variant="success" 
                  size="lg"
                  onClick={createNewClient}
                >
                  💾 Save New Client
                </Button>
                <Button variant="secondary" size="lg">
                  ✕ Cancel
                </Button>
              </div>
            </Form>

            {confirmationAdded && (
              <Alert variant="success" dismissible className="mt-4">
                ✓ Client <strong>{newClient.Name}</strong> was added successfully!
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
