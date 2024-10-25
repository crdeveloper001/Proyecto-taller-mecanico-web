import {Button, Form, Modal} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import useInventoryManagement from "../../../../Hooks/useInventoryManagement.js";

export const EditSelectedItem = ({ openWindowEdit,handleClose,data }) => {
    const { createNewItem,newItem } = useInventoryManagement();
    const [selectedItem, setSelectedItem] = useState(data);

    return(
        <>
            <Modal show={openWindowEdit} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>Edit Item {selectedItem._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="InputId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedItem._id}
                                name='InputId'
                                onChange={createNewItem}
                                disabled={true}

                            />
                        </Form.Group>
                        <Form.Group controlId="InputName">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedItem.Name}
                                name='InputName'
                                onChange={createNewItem}
                            />
                        </Form.Group>

                        <Form.Group controlId="InputManufacturer">
                            <Form.Label>Item Manufacturer</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedItem.Manufacturer}
                                name='InputManufacturer'
                                onChange={createNewItem}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="InputQuantity">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={selectedItem.Quantity}
                                name='InputQuantity'
                                onChange={createNewItem}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="InputProvider">
                            <Form.Label>Provider Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedItem.Provider}
                                name='InputProvider'
                                onChange={createNewItem}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="InputProviderContact">
                            <Form.Label>Provider Contact Phone/Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={selectedItem.ProviderContact}
                                name='InputProviderContact'
                                onChange={createNewItem}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="InputStock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Select aria-label='in stock or no stock item' onChange={createNewItem} name='InputStock'>
                                <option>Please select the current state</option>
                                <option value="In Stock">In Stock</option>
                                <option value="Out of Stock">Out of Stock</option>

                            </Form.Select>
                        </Form.Group>

                        <Button variant="success" type="button" style={{ 'marginTop': '1.5rem' }} onClick={() =>{
                            console.log("updated")}}>
                           Apply
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </>
    )



}