import { Button, Modal, Card, Row, Col } from 'react-bootstrap';

export const ClientsDetails = ({ show, handleCloseUserInformation, userData }) => {
  return (
    <Modal show={show} onHide={handleCloseUserInformation} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">
          <i className="bi bi-info-circle me-2"></i>Client Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light">
        <Card className="border-0 shadow-sm">
          <Card.Body>
            {/* Client Details Section */}
            <div className="mb-4">
              <h5 className="text-primary mb-3">
                <i className="bi bi-person-circle me-2"></i>Client Details
              </h5>
              <Row>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Identification</small></p>
                  <p className="fw-500">{userData._id}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Full Name</small></p>
                  <p className="fw-500">{userData.Name} {userData.Surname}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Email</small></p>
                  <p><a href={`mailto:${userData.Email}`}>{userData.Email}</a></p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Phone</small></p>
                  <p><a href={`tel:+${userData.Phone}`}>{userData.Phone}</a></p>
                </Col>
                <Col md={12} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Address</small></p>
                  <p>{userData.CurrentAddress}</p>
                </Col>
              </Row>
            </div>

            <hr className="my-4" />

            {/* Vehicle Details Section */}
            <div>
              <h5 className="text-primary mb-3">
                <i className="bi bi-car-front me-2"></i>Vehicle Details
              </h5>
              <Row>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Brand</small></p>
                  <p className="fw-500">{userData.VehicleDetails?.Brand || '-'}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Model</small></p>
                  <p className="fw-500">{userData.VehicleDetails?.Model || '-'}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Type</small></p>
                  <p className="fw-500">{userData.VehicleDetails?.Type || '-'}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Engine Capacity</small></p>
                  <p className="fw-500">{userData.VehicleDetails?.EngineCapacity || '-'}</p>
                </Col>
                <Col md={6} className="mb-3">
                  <p className="mb-1"><small className="text-muted">Registration Plate</small></p>
                  <p className="fw-500">{userData.VehicleDetails?.RegistrationPlate || '-'}</p>
                </Col>
              </Row>
            </div>
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
