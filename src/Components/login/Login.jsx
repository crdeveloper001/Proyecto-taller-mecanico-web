import React, { useEffect, useState } from "react";
import { Card, Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { Authorization } from "../../Services/AuthenticationService";
import useLoginAuth from "../../Hooks/useLoginAuth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import workshopImage from '../../assets/CurrentImages/Workshop.jpg'
import Descriptions from '../../assets/utils/AppDescriptions.json';

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
    <Container className="LoginContainer" fluid>
      <h1 className="text-white mb-4 mt-3">TALLER MECANICO APP</h1>
      <Card className="d-flex mx-auto ">
        <Row>
          <Col sm={3}>
            <Container>
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
                <hr />
                <a href="http://" target="_blank" rel="noopener noreferrer">Necesitas una cuenta?</a>
              </form>

            </Container>
          </Col>
          <Col>
            <React.Fragment>
              <div className="container">
                <p> {Descriptions.descripcion}</p>
                <hr />
                <h2>Funcionalidades Principales:</h2>
                <ul>
                  {Descriptions.funcionalidadesPrincipales.map(item => {
                    return (
                      <li>{item}</li>
                    )
                  })}
                </ul>
                <hr />
                <h2>Tecnologías Utilizadas:</h2>
                <ul>
                  {Descriptions.tecnologiasUtilizadas.map(item => {
                    return (
                      <li><strong>{item.tecnologia}</strong><br /> {item.descripcion}</li>
                    )
                  })}
                </ul>
                <hr />
                <p>{Descriptions.beneficios}</p>
              </div>
            </React.Fragment>
          </Col>


        </Row>
      </Card>
    </Container>

  );
};

