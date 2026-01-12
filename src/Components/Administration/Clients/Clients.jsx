import React, { useState } from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Button, Container, Form, Table } from 'react-bootstrap'
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
        {/* Header Section */}
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h2 className='text-dark fw-bold'>Customers</h2>
          <Button variant="primary" onClick={() => appNavigation("/add-new-client")}>
            + Add New Customer
          </Button>
        </div>

        {/* Search Bar */}
        <Form.Group controlId="Input_Search" className='mb-4' style={{ maxWidth: '350px' }}>
          <Form.Label className='text-dark fw-bold'>Search Customer</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter name, email, or phone..."
            onChange={searchOneClient}
          />
        </Form.Group>

        {/* Table */}
        <Table striped bordered responsive hover className='mt-4 shadow-sm'>
          <thead className='table-light'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th className='text-center'>Actions</th>
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
                  <td className='text-center'>
                    <Button 
                      variant="info" 
                      size="sm" 
                      className='me-2'
                      onClick={() => {
                        handleShowUserInformation();
                        saveClientDetailSelected(item);
                      }}
                    >
                      View
                    </Button>
                    <Button 
                      variant="success" 
                      size="sm"
                      onClick={() => {
                        handleShowCreateJob();
                        saveClientDetailSelected(item);
                      }}
                    >
                      New Task
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  No customers available
                </td>
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
