import React from "react";
import { Navigation } from "../../Routes/Navigation/Navigation";
import { Card, Col, Row, Container,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Dashboard = () => {

  const appNavigation = useNavigate();

  return (
    <>
      <Navigation/>
      <Container fluid>
        <Card className="mt-4">
          <Card.Header>Modules</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Pending Jobs</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto" onClick={() =>{
                      appNavigation("/pending-jobs");
                    }}>
                      Join
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Diagnostics</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto" onClick={() =>{
                      appNavigation("/diagnostics");
                    }}>
                    Join
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Quotes</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto" onClick={() =>{
                      appNavigation("quotes")
                    }}>
                    Join
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card>
                  <Card.Header className="text-center">Vehicles</Card.Header>
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Button variant="primary" className="mt-auto" onClick={() =>{
                      appNavigation("quotes")
                    }}>
                    Join
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        
      </Container>
    </>
  );
};
