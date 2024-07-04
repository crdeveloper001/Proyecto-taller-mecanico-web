import React, { useState } from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Button, Container, Form, Table, Col, Row } from 'react-bootstrap'
import useClientSettings from '../../../Hooks/useClientsSettings';
import { ClientsDetails } from './ClientsDetails/ClientsDetails';
import { useNavigate } from 'react-router-dom';
import { CreateNewJob } from '../../Workshop/PendingJobs/CreateNewJob/CreateNewJob';

export const Clients = () => {
  const appNavigation = useNavigate();
  const { getCurrentClients, currentClients, selectedClient, saveClientDetailSelected } = useClientSettings();
  getCurrentClients();

  const [showUserInformation, setShowUserInformation] = useState(false);
  const [showCreateNewJob, setShowCreateNewJob] = useState(false);

  const handleCloseUserInformation = () => setShowUserInformation(false);
  const handleCloseCreateNewJob = () => setShowCreateNewJob(false);

  const handleShowUserInformation = (client) => {
    saveClientDetailSelected(client);
    setShowUserInformation(true);
  };

  const handleShowCreateJob = (client) => {
    saveClientDetailSelected(client);
    setShowCreateNewJob(true);
  };

  return (
    <div>
      <Navigation />
      <Container fluid className='mt-4'>

        <form className='mb-4' >
          <Form.Group controlId="Input_Search" style={{ maxWidth: '300px' }}>
            <Form.Label className='text-dark'>Type a customer name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button className='mt-3' variant="success" size="sm" onClick={() => console.log("Search")}>
            Search Customer
          </Button>

        </form>
        <div style={{ color: 'black', border: 'lpx', borderStyle: 'solid' }}></div>

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
              <th>Current Options</th>
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
                    <Button variant="info" size="sm" onClick={() => {
                      handleShowUserInformation()
                      saveClientDetailSelected(item)
                    }}>
                      View more information
                    </Button>
                    <Button variant="success" size="sm" onClick={() => {
                      handleShowCreateJob()
                      saveClientDetailSelected(item)
                    }}>
                      Generate Task for client
                    </Button>

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
        <CreateNewJob show={showCreateNewJob} handleCloseCreateNewJob={handleCloseCreateNewJob} userData={selectedClient} />
        <ClientsDetails show={showUserInformation} handleCloseUserInformation={handleCloseUserInformation} userData={selectedClient} />
      </Container>
    </div>
  )
}
