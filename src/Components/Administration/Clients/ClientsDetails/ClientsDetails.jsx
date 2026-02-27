import { Button, Modal, Card, Row, Col } from 'react-bootstrap';

const DetailField = ({ label, value }) => (
  <Col md={6} className="mb-3">
    <p className="mb-1">
      <small className="text-muted">{label}</small>
    </p>
    <p className="fw-500">{value || '-'}</p>
  </Col>
);

const Section = ({ icon, title, children }) => (
  <div className="mb-4">
    <h5 className="text-primary mb-3">
      <i className={`bi ${icon} me-2`}></i>
      {title}
    </h5>
    <Row>{children}</Row>
  </div>
);

export const ClientsDetails = ({ show, handleCloseUserInformation, userData = {} }) => {
  if (!userData || Object.keys(userData).length === 0) {
    return (
      <Modal show={show} onHide={handleCloseUserInformation} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Client Information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <p className="text-muted">No client data available.</p>
        </Modal.Body>
      </Modal>
    );
  }

  const { _id, Name, Surname, Email, Phone, CurrentAddress, VehicleDetails = {} } = userData;

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
            <Section icon="bi-person-circle" title="Client Details">
              <DetailField label="Identification" value={_id} />
              <DetailField label="Full Name" value={`${Name} ${Surname}`.trim()} />
              <Col md={6} className="mb-3">
                <p className="mb-1"><small className="text-muted">Email</small></p>
                <p><a href={`mailto:${Email}`}>{Email}</a></p>
              </Col>
              <Col md={6} className="mb-3">
                <p className="mb-1"><small className="text-muted">Phone</small></p>
                <p><a href={`tel:+${Phone}`}>{Phone}</a></p>
              </Col>
              <Col md={12} className="mb-3">
                <p className="mb-1"><small className="text-muted">Address</small></p>
                <p>{CurrentAddress || '-'}</p>
              </Col>
            </Section>

            <hr className="my-4" />

            <Section icon="bi-car-front" title="Vehicle Details">
              <DetailField label="Brand" value={VehicleDetails.Brand} />
              <DetailField label="Model" value={VehicleDetails.Model} />
              <DetailField label="Type" value={VehicleDetails.Type} />
              <DetailField label="Engine Capacity" value={VehicleDetails.EngineCapacity} />
              <DetailField label="Registration Plate" value={VehicleDetails.RegistrationPlate} />
            </Section>
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
};
