import React from 'react'
import { Navigation } from '../../../Routes/Navigation/Navigation'
import {Table,Button} from 'react-bootstrap'
export const Diagnotics = () => {

  const pendingJobs = [
    { id: 1, vehicle: "Car", description: "Engine check", status: "Pending" },
    { id: 2, vehicle: "Truck", description: "Brake repair", status: "Pending" },
    // Additional pending jobs...
  ];
  return (
    <div>
     
      <Navigation />
      <h3 className="text-center text-light"> CURRENT PENDING JOBS: 2</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Vehicle</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingJobs.map((job) => (
            <tr key={job.id}>
              <td>{job.id}</td>
              <td>{job.vehicle}</td>
              <td>{job.description}</td>
              <td>{job.status}</td>
              <td>
                <Button variant="primary">View Details for </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
