import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap';

export const ReportProblem = ({ show, onClose }) => {
    const [problemDescription, setProblemDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log("Formulario enviado:", problemDescription);
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Reportar problema con mis datos de perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="problemDescription">
                        <Form.Label>Describa el problema:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={problemDescription}
                            onChange={(event) => setProblemDescription(event.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mt-2'>
                        Enviar reporte
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
