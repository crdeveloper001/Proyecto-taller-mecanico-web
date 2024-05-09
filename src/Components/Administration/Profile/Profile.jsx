import React from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";

export const Profile = () => {
  return (
    <div>
      <Navigation />

      <Container>
        <Card className="mt-4">
          <Card.Header>Perfil</Card.Header>
          <Card.Body>
            <Card.Text>
              <Row md={6}>
                <Col>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Id de perfil</Form.Label>
                    <Form.Control type="text" disabled placeholder="123456789"/>
                  </Form.Group>
                  <hr />
                  <Button className="mt-1" variant="warning" size="sm" onClick={() => console.log("Editar Perfil")}>
                    Editar Perfil
                  </Button>
                  <hr />
                  <Button className="mt-1" variant="danger" size="sm" onClick={() => console.log("Eliminar Perfil")}>
                    Eliminar cuenta
                  </Button>
                  <hr />
                  <Button className="mt-1" variant="info" size="sm" onClick={() => console.log("Reportar Problema")}>
                    Reportar Problema
                  </Button>
                </Col>
                <Col md={5}>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="tel" />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Cargo Actual</Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control type="text" readOnly />
                  </Form.Group>
                  <Form.Group controlId="form-group-id">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
