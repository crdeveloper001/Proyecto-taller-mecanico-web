import React, { useState } from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Button, Container, Form, Table, Col, Row } from 'react-bootstrap'
import useClientSettings from '../../../Hooks/useClientsSettings';
import { ClientsDetails } from './ClientsDetails/ClientsDetails';
import { useNavigate } from 'react-router-dom';
import { CreateNewJob } from '../../Workshop/PendingJobs/CreateNewJob/CreateNewJob';

export const Clients = () => {
  const appNavigation = useNavigate();
  const { showUserInformation,
    showCreateNewJob,
    currentClients,
    selectedClient,
    handleShowUserInformation,
    handleShowCreateJob,
    handleCloseUserInformation,
    handleCloseCreateNewJob,
    getCurrentClients,
    saveClientDetailSelected,
    searchOneClient } = useClientSettings();

    
  getCurrentClients();

  return (
    <div>
      <Navigation />
      <Container fluid className='mt-4'>

        <form className='mb-4' >
          <Form.Group controlId="Input_Search" style={{ maxWidth: '300px' }}>
            <Form.Label className='text-dark'>Type a customer name</Form.Label>
            <Form.Control type="text" onChange={searchOneClient} />
          </Form.Group>
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
                    <Button variant="info" size="sm" onClick={(e) => {
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
                <td colSpan="5" className="text-center">No clients available or found</td>
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
