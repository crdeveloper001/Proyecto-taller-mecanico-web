import React, { useState } from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Container, Table, Form, Button, Col, Row } from 'react-bootstrap'
import useClientSettings from '../../../Hooks/useClientsSettings';
import { ClientsDetails } from './ClientsDetails/ClientsDetails';
import { useNavigate } from 'react-router-dom';

export const Clients = () => {
  const appNavigation = useNavigate()
  const { getCurrentClients, currentClients,selectedClient,saveClientDetailSelected } = useClientSettings();
  getCurrentClients()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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

        <Button variant="info" size="sm" onClick={() => appNavigation("/add-new-client")}>
          Add new customer
        </Button>

        <br />

        <Table striped bordered responsive hover className='mt-4'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {currentClients.length > 0 ? (
              currentClients.map((item, index) => (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Surname}</td>
                  <td>{item.Email}</td>
                  <td>{item.Phone}</td>
                  <td>
                    <Button variant="info" size="sm" onClick={() => {handleShow()
                      saveClientDetailSelected(item)
                    }}>
                      View more information
                    </Button>
                    <ClientsDetails show={show} handleClose={handleClose} userData={selectedClient} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No clients available</td>
              </tr>
            )}
          </tbody>
        </Table>

      </Container>
    </div>
  )
}
