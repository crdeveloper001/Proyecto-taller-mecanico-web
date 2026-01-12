import { useState } from "react";
import { Navigation } from "../../../Routes/Navigation/Navigation";
import { Alert, Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import useProfileSettings from "../../../Hooks/useProfileSettings";
import { ReportProblem } from "./ReportProblem/ReportProblem";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    const [profileSaved, setProfileSaved] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const {
        currentSession,
        enableField,
        activeProfileForm,
        saveProfileInformationByUser,
        createUpdateToProfile
    } = useProfileSettings();

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSaveProfile = async () => {
        try {
            const result = await createUpdateToProfile();
            if (result === 201) {
                setProfileSaved(true);
                setTimeout(() => {
                    sessionStorage.clear();
                    navigate("/");
                }, 3000);
                activeProfileForm();
            }
        } catch (error) {
            if (error.code === "ERR_NETWORK") {
                alert("Server is down, please try later");
            }
        }
    };

    return (
        <div>
            <Navigation />
            <Container className="py-5">
                <Row className="mb-4">
                    <Col>
                        <h1 className="mb-0">My Profile</h1>
                        <p className="text-muted">Manage your account settings</p>
                    </Col>
                </Row>

                {profileSaved && (
                    <Alert variant="success" dismissible onClose={() => setProfileSaved(false)}>
                        ✓ Profile saved successfully! Redirecting...
                    </Alert>
                )}

                <Row className="g-4">
                    <Col md={3}>
                        <Card className="sticky-top" style={{ top: "20px" }}>
                            <Card.Header className="bg-light">
                                <h6 className="mb-0">Actions</h6>
                            </Card.Header>
                            <Card.Body className="d-flex flex-column gap-2">
                                <Button 
                                    variant="warning" 
                                    size="sm"
                                    onClick={() => {
                                        activeProfileForm();
                                    }}
                                >
                                    ✏️ Edit Profile
                                </Button>
                                <Button 
                                    variant="info" 
                                    size="sm"
                                    onClick={handleShowModal}
                                >
                                    💬 Report Problem
                                </Button>
                                <Button 
                                    variant="danger" 
                                    size="sm"
                                    onClick={() => console.log("Delete Account")}
                                >
                                    🗑️ Delete Account
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={9}>
                        <Card>
                            <Card.Header className="bg-light">
                                <h6 className="mb-0">Personal Information</h6>
                            </Card.Header>
                            <Card.Body>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Name</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                disabled={enableField}
                                                placeholder={currentSession.Payload?.Name}
                                                onChange={saveProfileInformationByUser}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Surname</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                disabled={enableField}
                                                placeholder={currentSession.Payload?.Surname}
                                                onChange={saveProfileInformationByUser}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Email</Form.Label>
                                            <Form.Control 
                                                type="email" 
                                                disabled={enableField}
                                                placeholder={currentSession.Payload?.CurrentEmail}
                                                onChange={saveProfileInformationByUser}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Phone</Form.Label>
                                            <Form.Control 
                                                type="tel" 
                                                disabled={enableField}
                                                placeholder={currentSession.Payload?.Phone}
                                                onChange={saveProfileInformationByUser}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mt-4">
                            <Card.Header className="bg-light">
                                <h6 className="mb-0">Job Information</h6>
                            </Card.Header>
                            <Card.Body>
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Current Position</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={currentSession.Payload?.CurrentPosition || ""}
                                                disabled 
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label className="fw-bold">Role</Form.Label>
                                            <Form.Control 
                                                type="text" 
                                                value={currentSession.Payload?.Role || ""}
                                                disabled 
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="mt-4">
                            <Card.Header className="bg-light">
                                <h6 className="mb-0">Security</h6>
                            </Card.Header>
                            <Card.Body>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        disabled={enableField}
                                        onChange={saveProfileInformationByUser}
                                    />
                                </Form.Group>

                                {!enableField && (
                                    <div className="mt-4 pt-3 border-top">
                                        <Button 
                                            variant="success" 
                                            onClick={handleSaveProfile}
                                        >
                                            ✓ Save Profile
                                        </Button>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <ReportProblem show={showModal} onClose={handleCloseModal} />
            </Container>
        </div>
    );
};
