import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthentication from "../../Hooks/useAuthentication";
import Descriptions from '../../assets/utils/AppDescriptions.json'
import "./index.css";
import { Container, Card, Row, Form, Button, Col } from "react-bootstrap";

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
        if (sessionPayload?.Auth_key === "USER_AUTHORIZED") {
            appNavigation("/dashboard");
        }
    }, [sessionPayload, appNavigation]);

    const handleLogin = async () => {
        try {
            const response = await authorizationFlow();
            if (response?.Auth_key === "USER_AUTHORIZED") {
                appNavigation("/dashboard");
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };

    return (
        <Container className="LoginContainer" fluid>
            <h1 className="text-dark mb-4 mt-3">TALLER MECANICO APP</h1>
            <Card className="d-flex mx-auto">
                <Row>
                    <Col sm={3}>
                        <Container id="login-card-container">
                            <Form>
                                <Form.Group controlId="InputUsername">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="username@domain.com"
                                        onChange={saveEmailInfo}
                                    />
                                </Form.Group>
                                <Form.Group controlId="InputPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        autoComplete="current-password"
                                        placeholder="Enter password"
                                        onChange={savePasswordInfo}
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    size="sm"
                                    type="button"
                                    className="mt-3"
                                    onClick={handleLogin}
                                >
                                    INICIAR SESION
                                </Button>
                                <hr />
                                <a href="#" onClick={(e) => {
                                    e.preventDefault();
                                    alert("contact admin");
                                }}>
                                    Necesitas una cuenta?
                                </a>
                            </Form>
                        </Container>
                    </Col>
                    <Col>
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
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};
