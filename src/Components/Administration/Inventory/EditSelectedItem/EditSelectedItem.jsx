import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import useInventoryManagement from "../../../../Hooks/useInventoryManagement.js";

export const EditSelectedItem = ({ openWindowEdit, handleClose, data }) => {
    const { createNewItem } = useInventoryManagement();
    const [selectedItem, setSelectedItem] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelectedItem((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Modal show={openWindowEdit} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Item {selectedItem._id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {Object.entries(selectedItem).map(([key, value]) => (
                        <Form.Group controlId={`Input${key}`} key={key}>
                            <Form.Label>{key.replace(/([A-Z])/g, ' $1').trim()}</Form.Label>
                            <Form.Control
                                type={key === 'Quantity' ? 'number' : 'text'}
                                placeholder={value}
                                name={key}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    ))}
                    <Button variant="primary" type="button" style={{ marginTop: '1.5rem' }} onClick={() => {
                        console.log("updated");
                    }}>
                        Apply
                    </Button>
                    <Button variant="secondary" type="button" style={{ marginTop: '1.5rem', marginLeft: '1rem' }} onClick={handleClose}>
                        Cancel
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
