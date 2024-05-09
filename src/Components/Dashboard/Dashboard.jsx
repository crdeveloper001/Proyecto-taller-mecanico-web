import React from "react";
import { Navigation } from "../../Routes/Navigation/Navigation";
import { Card, Col, Row, Container,Button } from "react-bootstrap";

export const Dashboard = () => {
  return (
    <div>
      <Navigation />
      <Container fluid>
        <Card className="mt-4">
          <Card.Header>MODULOS</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Trabajos Pendientes</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto">
                      Acceder
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Diagnosticos</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto">
                    Acceder
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Cotizaciones</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto">
                    Acceder
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
