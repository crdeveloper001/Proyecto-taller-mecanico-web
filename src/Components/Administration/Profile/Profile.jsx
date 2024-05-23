import React, { useState } from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Container, Card, Button, Col, Row, Form, Alert, Modal } from "react-bootstrap";
import useProfileSettings from "../../../Hooks/useProfileSettings";
import { ReportProblem } from "./ReportProblem/ReportProblem";

export const Profile = () => {
  const { profileInformation, currentPayload, enableField, activeProfileForm, getCurrentSession, saveProfileInformationByUser, createUpdateToProfile } = useProfileSettings()
  getCurrentSession();
  const [showAlertToUser, setTurnOnOffAlert] = useState(false)
  const [profileSaved, setProfileSaved] = useState(false);

  //handle the report modal
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (

    <div>
      <Navigation />
      <Container>

        <form action="" method="post">
          <Card className="mt-4">
            <Card.Header>Perfil</Card.Header>
            <Card.Body>
              <Card.Text>
               

                <Row md={6}>
                  <Col>
                    <Card>
                      <Card.Header>Opciones</Card.Header>
                      <Card.Body>
                        <Card.Text>

                          <Button className="mt-1" variant="warning" size="sm" onClick={() => {
                            activeProfileForm()
                            setTurnOnOffAlert(true)
                            setProfileSaved(false);
                          }}>
                            Editar Perfil
                          </Button>


                          <hr />
                          <Button className="mt-1" variant="danger" size="sm" onClick={() => console.log("Eliminar Perfil")}>
                            Eliminar cuenta
                          </Button>
                          <hr />
                          
                          <ReportProblem show={showModal} onClose={handleCloseModal} />
                          <Button className="mt-1" variant="info" size="sm"  onClick={handleShowModal}>
                            Reportar Problema
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={5}>

                    <Form.Group controlId="InputName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" disabled={enableField} value={profileInformation.Nombre} onChange={(e) => {
                        saveProfileInformationByUser(e)
                      }} />
                    </Form.Group>
                    <Form.Group controlId="InputLastName">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control type="text" disabled={enableField} value={profileInformation.Apellidos} onChange={(e) => {
                        saveProfileInformationByUser(e)
                      }} />
                    </Form.Group>
                    <Form.Group controlId="InputEmail">
                      <Form.Label>Correo Electronico</Form.Label>
                      <Form.Control type="email" disabled={enableField} value={profileInformation.CorreoElectronico} onChange={(e) => {
                        saveProfileInformationByUser(e)
                      }} />
                    </Form.Group>
                    <Form.Group controlId="InputPhone">
                      <Form.Label>Telefono</Form.Label>
                      <Form.Control type="tel" disabled={enableField} value={profileInformation.Telefono} onChange={(e) => {
                        saveProfileInformationByUser(e)
                      }} />
                    </Form.Group>
                  </Col>
                  <Col md={5}>
                    <Form.Group controlId="InputCurrentJob">
                      <Form.Label>Cargo Actual</Form.Label>
                      <Form.Control type="text" value={profileInformation.CargoActual} disabled />
                    </Form.Group>
                    <Form.Group controlId="InputRol">
                      <Form.Label>Rol</Form.Label>
                      <Form.Control type="text" value={profileInformation.Rol} disabled />
                    </Form.Group>
                    <Form.Group controlId="InputPassword">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control type="password" disabled={enableField} autoComplete="true" onChange={(e) => {
                        saveProfileInformationByUser(e)
                      }} />
                    </Form.Group>
                    {!enableField ? (
                      <><hr /><Button variant="success" size="sm" onClick={() => {
                        createUpdateToProfile().then(result => {
                          switch (result) {
                            case 201:
                              setProfileSaved(true);
                              activeProfileForm()
                              break;

                          }
                        }).catch(error => {

                          switch (error.code) {
                            case "ERR_NETWORK":
                              alert("me cague en el server");

                          }
                        })
                      }}>
                        Save Profile
                      </Button></>
                    ) : ""}


                  </Col>

                </Row>

                {profileSaved ? <Alert variant="success" dismissible >
                  PROFILE SAVED!!
                </Alert> : ""}

              </Card.Text>


            </Card.Body>
          </Card>


        </form>


      </Container>
    </div>
  );
};
