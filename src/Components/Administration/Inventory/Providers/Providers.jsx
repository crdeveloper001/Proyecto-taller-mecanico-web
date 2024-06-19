import React, {useState} from "react";
import {Navigation} from '../../../../Routes/Navigation/Navigation'
import {Button, Container, Form} from "react-bootstrap";

export const Providers = () => {

  const [formData, setFormData] = useState({
    _id: "",
    Nombre: "",
    Telefono: "",
    CorreoElectronico: "",
    TipoRepuestos: "",
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
      <Navigation/>
      <Container>
        <h2>Provider Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Nombre"
              value={formData.Nombre}
              onChange={handleChange}
              
            />
          </Form.Group>

          <Form.Group controlId="formTelefono">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              name="Telefono"
              value={formData.Telefono}
              onChange={handleChange}
              
            />
          </Form.Group>

          <Form.Group controlId="formCorreoElectronico">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="CorreoElectronico"
              value={formData.CorreoElectronico}
              onChange={handleChange}
              
            />
          </Form.Group>

          <Form.Group controlId="formTipoRepuestos">
            <Form.Label>Provider Type</Form.Label>
            <Form.Control
              type="text"
              name="TipoRepuestos"
              value={formData.TipoRepuestos}
              onChange={handleChange}
              
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-2">
            Save
          </Button>
        </Form>
      </Container>
    </div>
  )
}
