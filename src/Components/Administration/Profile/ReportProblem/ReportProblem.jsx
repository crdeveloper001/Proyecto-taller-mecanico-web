import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { sendContactInfo } from "../../../../Services/EmailService/EmailService";
import useProfileSettings from '../../../../Hooks/useProfileSettings';

export const ReportProblem = ({ show, onClose }) => {
    const { currentSession } = useProfileSettings()
    const [problemDescription, setProblemDescription] = useState({
        application: "Taller Mecanico App",
        name: currentSession?.Payload?.Name,
        lastname: currentSession?.Payload?.Surname,
        phone: currentSession?.Payload?.Phone,
        email: currentSession?.Payload?.CurrentEmail,
        message: "",
    });

    const[buttonDisabled,setButtonDisabled] = useState(false)

    const handleSubmit = (e) => {
        setButtonDisabled(true)
        sendContactInfo(problemDescription, currentSession)
            .then((successMessage) => {

                alert("Mensaje Enviado!!!", successMessage)

                document.getElementById("problemDescription").value = ""
            })
            .catch((errorMessage) => {
                console.error(errorMessage);
            });
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Reportar problema con mis datos de perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form >
                    <Form.Group controlId="problemDescription">
                        <Form.Label>Describa el problema a detalle:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}

                            onChange={(event) => setProblemDescription((prevState) => ({ ...prevState, message: event.target.value }))}
                        />
                    </Form.Group>
                    <Button disabled={!buttonDisabled ? false : true} variant="primary" type="button" className='mt-2' onClick={handleSubmit}>
                        Enviar reporte al administrador del app
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button  variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
