import React from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Container, Table, Form, Button, Col, Row } from 'react-bootstrap'

export const Clients = () => {
  return (
    <div>
      <Navigation />
      <Container fluid className='mt-4'>

        <form className='mb-4' >
          <Form.Group controlId="Input_Search" style={{ maxWidth: '300px' }}>
            <Form.Label className='text-light'>Type a customer name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button className='mt-3' variant="success" size="sm" onClick={() => console.log("Search")}>
            Search Customer
          </Button>

        </form>
        <div style={{ color: 'white', border: 'lpx', borderStyle: 'solid' }}></div>

        <Button variant="dark" size="sm" onClick={() => console.log("Add new customer")}>
          Add new customer
        </Button>

        <br />

        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>customer@gmail.com</td>
              <td>8888855555</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>customer@gmail.com</td>
              <td>8888855555</td>
            </tr>
          </tbody>
        </Table>

      </Container>
    </div>
  )
}
