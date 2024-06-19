import React from 'react'
import {Navigation} from '../../../../../Routes/Navigation/Navigation'
import {Table} from 'react-bootstrap';

export const ViewProviders = () => {

  const mockData = [
    { _id: 1, name: 'John Doe', phone: 1234567890, email: 'john.doe@example.com', partsType: 'Engine' },
    { _id: 2, name: 'Jane Smith', phone: 2345678901, email: 'jane.smith@example.com', partsType: 'Brakes' },
    { _id: 3, name: 'Jim Brown', phone: 3456789012, email: 'jim.brown@example.com', partsType: 'Transmission' },
    // Add more mock data as needed
  ];

  return (
    <div>
      <Navigation />
      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Parts Type</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td><a href={`tel:+:${item.phone}`}>{item.phone}</a></td>
              <td><a href={`mailto:${item.email}`}>{item.email}</a></td>
              <td>{item.partsType}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}
