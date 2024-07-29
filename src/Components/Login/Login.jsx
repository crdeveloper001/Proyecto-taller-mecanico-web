import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../Hooks/useAuthentication";
import Descriptions from '../../assets/utils/AppDescriptions.json'
import "./index.css";
import { Container, Card, Row, Form, Button, Col } from "react-bootstrap";
import { SideBarMenu2 } from "../SideBarMenu2/SideBarMenu2";

export const Login = () => {
    const appNavigation = useNavigate();

    const {
        sessionPayload,
        saveEmailInfo,
        savePasswordInfo,
        authorizationFlow,
    } = useAuthentication();

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <>
            <SideBarMenu2/>





            {/* <Container className="LoginContainer" fluid>
                <h1 className="text-dark mb-4 mt-3">TALLER MECANICO APP</h1>
                <Card className="d-flex mx-auto ">
                    <Row>
                        <Col sm={3}>
                            <Container id="login-card-container">
                                <Form>
                                    <Form.Group controlId="InputUsername">
                                        <Form.Label>Correo Electronico</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="username@domain.com"
                                            onChange={(e) => {
                                                saveEmailInfo(e);
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="InputPassword" >
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control
                                            type="password"
                                            autoComplete="InputPassword"
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
                                        onClick={() => {
                                            authorizationFlow().then(currentResponse => {

                                                if (currentResponse === undefined) {
                                                    alert("bad request, try again")
                                                } else {
                                                    switch (currentResponse.Auth_key) {
                                                        case "USER_AUTHORIZED":
                                                            appNavigation("/dashboard");
                                                            break;
                                                        default:
                                                            appNavigation("/");
                                                            break;
                                                    }
                                                }

                                            }).finally(() => {
                                                console.log("Authorization flow completed");
                                            });


                                        }}
                                    >
                                        INICIAR SESION
                                    </Button>
                                    <hr />
                                    <a href="http://" target="_blank" rel="noopener noreferrer" onClick={() => {
                                        alert("contact admin")
                                    }}>Necesitas una cuenta?</a>
                                </Form>

                            </Container>
                        </Col>
                        <Col>
                            <React.Fragment>
                                <div className="container">
                                    <p>{Descriptions.descripcion}</p>
                                    <hr />
                                    <h2>Funcionalidades Principales:</h2>
                                    <ul>
                                        {Descriptions.funcionalidadesPrincipales.map(item => (
                                            <li key={item.id}>{item.funcionalidad}</li>
                                        ))}
                                    </ul>
                                    <hr />
                                    <h2>Tecnologías Utilizadas:</h2>
                                    <ul>
                                        {Descriptions.tecnologiasUtilizadas.map(item => (
                                            <li key={item.id}>
                                                <strong>{item.tecnologia}</strong><br />
                                                {item.descripcion}
                                            </li>
                                        ))}
                                    </ul>
                                    <hr />
                                    <p>{Descriptions.beneficios}</p>
                                </div>
                            </React.Fragment>
                        </Col>


                    </Row>
                </Card>
            </Container> */}
        </>
    );
};
