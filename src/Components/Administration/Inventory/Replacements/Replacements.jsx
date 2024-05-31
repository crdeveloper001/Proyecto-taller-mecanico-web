import React, { useState } from 'react';
import { Navigation } from '../../../../Routes/Navigation/Navigation';
import { Card, Table, Modal, Form, Button, Container, Row, Col, Badge } from 'react-bootstrap';

export const Replacements = () => {
  const [inventoryData, setInventoryData] = useState([
    { _id: 1, name: 'Producto 1', manufacturer: 'Fabricante A', quantity: 10, availability: 'Disponible' },
    { _id: 2, name: 'Producto 2', manufacturer: 'Fabricante B', quantity: 20, availability: 'No Disponible' },
    { _id: 3, name: 'Producto 3', manufacturer: 'Fabricante C', quantity: 15, availability: 'Disponible' },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedQuantity, setEditedQuantity] = useState('');
  const [editedManufacturer, setEditedManufacturer] = useState('');
  const [editedAvailability, setEditedAvailability] = useState('');

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditedName(item.name);
    setEditedQuantity(item.quantity);
    setEditedManufacturer(item.manufacturer);
    setEditedAvailability(item.availability);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    const updatedData = inventoryData.filter((i) => i._id !== item._id);
    setInventoryData(updatedData);
  };

  const handleSaveEdit = () => {
    const updatedData = inventoryData.map((item) =>
      item._id === selectedItem._id
        ? {
            ...item,
            name: editedName,
            quantity: editedQuantity,
            manufacturer: editedManufacturer,
            availability: editedAvailability,
          }
        : item
    );
    setInventoryData(updatedData);
    setShowEditModal(false);
  };

  return (
    <div>
      <Navigation />
      <Container fluid className='mt-4'>
        <Row sm={2}>
          <Col sm={2}>
            <Button variant="success">Create Item +</Button>
          </Col>
        </Row>
        <Card className='mt-3'>
          <Card.Body>
            <Card.Title>Inventario</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Fabricante</th>
                  <th>Cantidad</th>
                  <th>Disponibilidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.manufacturer}</td>
                    <td>{item.quantity}</td>
                    <td>{item.availability}</td>
                    <td>
                      {/* <Button variant="info" onClick={() => handleEdit(item)}>Editar</Button>{' '} */}
                      <Button variant="danger" onClick={() => handleDelete(item)}>Eliminar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
       
      </Container>
    </div>
  );
};
