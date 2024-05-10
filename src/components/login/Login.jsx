import React, { useEffect, useState } from "react";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import { Authorization } from "../../Services/AuthenticationService";
import { GetAllClients } from "../../Services/ClientsService";
import useLoginAuth from "../../Hooks/useLoginAuth";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const appNavigation = useNavigate();
  const {
    currentCredentials,
    sessionPayload,
    saveEmailInfo,
    savePasswordInfo,
    AuthorizationFlow,
  } = useLoginAuth();

  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-white mb-4">TALLER MECANICO APP</h1>

      <Row>
        

        <Col>
          <Card>
            <Card.Body>
              <form>
                <Form.Group controlId="InputUsername">
                  <Form.Label>CORREO ELECTRONICO</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="username@domain.com"
                    onChange={(e) => {
                      saveEmailInfo(e);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="InputPassword">
                  <Form.Label>CONTRASEÑA</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => {
                      savePasswordInfo(e);
                    }}
                  />
                </Form.Group>
                <Button
                  variant="success"
                  size="sm"
                  type="button"
                  className="mt-3"
                  onClick={async () => {
                    await AuthorizationFlow();

                    switch (sessionPayload.auth_key) {
                      case "USER_AUTHORIZED":
                        appNavigation("Dashboard-App");
                        break;

                      default:
                        appNavigation("/");
                        break;
                    }
                  }}
                >
                  INICIAR SESION
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header>Descripcion del app</Card.Header>
            <Card.Body>
              <Card.Text>
                <p className="descriptionAppText">
                  ESTA APLICACION ES UN ERP EN FASE BETA PARA GESTIONAR UN
                  TALLER MECANICO DE MANERA SENCILLA Y EFICAZ EN DONDE CUALQUIER
                  EMPRESA PUEDE LLEVAR EL CONTROL DE LOS TRABAJOS PENDIENTES EL
                  CONTROL DE CLIENTES, PROVEEDORES, INVENTARIOS EN GENERAL,
                  DIAGNOSTICOS DE VEHICULOS Y GENERACION DE REPORTES DE ACUERDO
                  AL MODULO DE TRABAJO
                </p>
                <hr />
                <h5>Tecnologias aplicadas</h5>

                <ul>
                  <li>React JS</li>
                  <li>React Bootstrap</li>
                  <li>Spring Boot API</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
