import React, { useEffect, useState } from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import useProfileSettings from "../../../Hooks/useProfileSettings";
import { ReportProblem } from "./ReportProblem/ReportProblem";

export const Profile = () => {
    const [showAlertToUser, setTurnOnOffAlert] = useState(false);

    const [profileSaved, setProfileSaved] = useState(false);

    const {
        profileInformation,
        currentSession,
        enableField,
        activeProfileForm,
        saveProfileInformationByUser,
        createUpdateToProfile
    } = useProfileSettings()


    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (

        <div>
            <Navigation />
            <Container>

                <form action="" method="post">
                    <Card className="mt-4">
                        <Card.Header>Profile</Card.Header>
                        <Card.Body>
                            <Card.Text>


                                <Row md={6}>
                                    <Col>
                                        <Card>
                                            <Card.Header>Options</Card.Header>
                                            <Card.Body>
                                                <Card.Text>

                                                    <Button className="mt-1" variant="warning" size="sm"
                                                        onClick={() => {
                                                            activeProfileForm()
                                                            setTurnOnOffAlert(true)
                                                            setProfileSaved(false);
                                                        }}>
                                                        Edit Profile
                                                    </Button>


                                                    <hr />
                                                    <Button className="mt-1" variant="danger" size="sm"
                                                        onClick={() => console.log("Eliminar Perfil")}>
                                                        Delete Account
                                                    </Button>
                                                    <hr />

                                                    <ReportProblem show={showModal} onClose={handleCloseModal} />
                                                    <Button className="mt-1" variant="info" size="sm"
                                                        onClick={handleShowModal}>
                                                        Report Problem
                                                    </Button>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={5}>

                                        <Form.Group controlId="InputName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" disabled={enableField}
                                                value={currentSession.Payload.Name}
                                                onChange={(e) => {
                                                    saveProfileInformationByUser(e)
                                                }} />
                                        </Form.Group>
                                        <Form.Group controlId="InputLastName">
                                            <Form.Label>Surname</Form.Label>
                                            <Form.Control type="text" disabled={enableField}
                                                value={currentSession.Payload.Surname}
                                                onChange={(e) => {
                                                    saveProfileInformationByUser(e)
                                                }} />
                                        </Form.Group>
                                        <Form.Group controlId="InputEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" disabled={enableField}
                                                value={currentSession.Payload.CurrentEmail}
                                                onChange={(e) => {
                                                    saveProfileInformationByUser(e)
                                                }} />
                                        </Form.Group>
                                        <Form.Group controlId="InputPhone">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control type="tel" disabled={enableField}
                                                value={currentSession.Payload.Phone}
                                                onChange={saveProfileInformationByUser} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group controlId="InputCurrentJob">
                                            <Form.Label>Current Position</Form.Label>
                                            <Form.Control type="text" value={currentSession.Payload.CurrentPosition}
                                                disabled />
                                        </Form.Group>
                                        <Form.Group controlId="InputRol">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Control type="text" value={currentSession.Payload.Role} disabled />
                                        </Form.Group>
                                        <Form.Group controlId="InputPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" disabled={enableField} autoComplete="true"
                                                onChange={(e) => {
                                                    saveProfileInformationByUser(e)
                                                }} />
                                        </Form.Group>
                                        {!enableField ? (
                                            <>
                                                <hr />
                                                <Button variant="success" size="sm" onClick={() => {
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

                                {profileSaved ? <Alert variant="success" dismissible>
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
