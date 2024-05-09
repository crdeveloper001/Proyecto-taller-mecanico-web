import React, { useState } from 'react'
import { Navigation } from '../../../../Routes/Navigation/Navigation'
import { Card,Table,Modal,Form,Button } from 'react-bootstrap';
export const Replacements = () => {
  const [inventoryData, setInventoryData] = useState([
    { id: 1, name: 'Producto 1', quantity: 10 },
    { id: 2, name: 'Producto 2', quantity: 20 },
    { id: 3, name: 'Producto 3', quantity: 15 },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedQuantity, setEditedQuantity] = useState('');

  const handleEdit = (item) => {
    setSelectedItem(item);
    setEditedName(item.name);
    setEditedQuantity(item.quantity);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    const updatedData = inventoryData.filter((i) => i.id !== item.id);
    setInventoryData(updatedData);
  };

  const handleSaveEdit = () => {
    const updatedData = inventoryData.map((item) =>
      item.id === selectedItem.id ? { ...item, name: editedName, quantity: editedQuantity } : item
    );
    setInventoryData(updatedData);
    setShowEditModal(false);
  };

  return (
    <div>
      <Navigation/>
      <Card>
      <Card.Body>
        <Card.Title>Inventario</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button variant="info" onClick={() => handleEdit(item)}>
                    Editar
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(item)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Nombre del Producto</Form.Label>
              <Form.Control
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formProductQuantity">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control
                type="number"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
    </div>
  )
}
