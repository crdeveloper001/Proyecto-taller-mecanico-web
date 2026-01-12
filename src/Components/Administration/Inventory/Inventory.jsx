import React from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import { Container, Table, Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap'
import useInventoryManagement from '../../../Hooks/useInventoryManagement'
import { EditSelectedItem } from "./EditSelectedItem/EditSelectedItem.jsx";

export const Inventory = () => {
  const { inventoryItems, openModalCreateItem, openModalEditItem, OpenCreationForm, CloseCreationForm, CloseEditForm, OpenEditForm } = useInventoryManagement()

  return (
    <>
      <Navigation />
      <Container fluid>
        <Button variant="dark" style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }} onClick={OpenCreationForm}>
          Create New Item
        </Button>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search items..."
            aria-label="Search items"
          />
          <Button variant="outline-secondary" type="button">Search</Button>
        </InputGroup>

        {openModalCreateItem && <AddNewItem openWindow={openModalCreateItem} handleClose={CloseCreationForm} />}

        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Item Name</th>
              <th>Item Manufacturer</th>
              <th># Quantity</th>
              <th>Availability</th>
              <th>Provider Name</th>
              <th>Provider Contact</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.length > 0 ? (
              inventoryItems.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.Name}</td>
                  <td>{item.Manufacturer}</td>
                  <td>{item.Quantity}</td>
                  <td>{item.Availability}</td>
                  <td>{item.Provider}</td>
                  <td>{item.ProviderContact}</td>
                  <td>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="warning" onClick={() => OpenEditForm(item)}>Edit</Button>
                      {openModalEditItem && <EditSelectedItem openWindowEdit={OpenCreationForm} handleClose={CloseEditForm} data={item} />}
                      <Button variant="success">Contact Provider</Button>
                      <Button variant="danger">Delete</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No data to show</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  )
}
