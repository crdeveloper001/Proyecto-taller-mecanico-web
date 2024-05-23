import React, { useState } from "react";
import { Navigation } from "../../../../Routes/Navigation/Navigation";
import { Button, Container, Form } from "react-bootstrap";

export const AddNewClient = () => {
  const [formData, setFormData] = useState({
    _id: "",
    Nombre: "",
    Telefono: "",
    Correo: "",
    Telefono: "",
    Direccion: "",
    Ciudad: "",
    Estado: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add API call here to submit the form data
  };
  return (
    <div>
      <Navigation />
      <Container>
        <h2>Add new client to system</h2>
       <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formNombre">
    <Form.Label>First Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your first name"
      value={formData.nombre}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formApellidos">
    <Form.Label>Last Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your last name"
      value={formData.apellidos}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formCorreo">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter your email address"
      value={formData.correo}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formTelefono">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control
      type="number"
      placeholder="Enter your phone number"
      value={formData.telefono}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your address"
      value={formData.address}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formCity">
    <Form.Label>City</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your city"
      value={formData.city}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formState">
    <Form.Label>State</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your state"
      value={formData.state}
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group controlId="formZipcode">
    <Form.Label>Zipcode</Form.Label>
    <Form.Control
      type="number"
      placeholder="Enter your zipcode"
      value={formData.zipcode}
      onChange={handleChange}
    />
  </Form.Group>

  <Button variant="primary" type="submit" className="mt-2">
    Save
  </Button>
</Form>
      </Container>
    </div>
  );
};
