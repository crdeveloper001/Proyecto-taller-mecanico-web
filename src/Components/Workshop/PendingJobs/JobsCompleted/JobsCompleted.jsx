import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { IoReloadSharp } from "react-icons/io5";
import useJobsSettings from "../../../../Hooks/useJobsSettings";

export const JobsCompleted = ({ dataFiltered }) => {
  const { currentJobs, filteredJobs, filterStatusJobs } = useJobsSettings();
  filterStatusJobs("Completed");

  // const makeRefresh = () =>{
  //     filterStatusJobs("Completed")
  // }
  return (
    <>
      <Container fluid>
        <Button
          variant="info"
          className="mb-3"
          size="sm"
          onClick={() => {
            alert("coming soon ");
          }}
        >
          <strong>
            {" "}
            <IoReloadSharp /> Refresh Records
          </strong>
        </Button>
        <hr />
        <h4>Total Records: [ {filteredJobs.length} ]</h4>
        <br />
        <Row xs={1} md={3} className="g-4">
          {filteredJobs.map((items, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{items.job_Name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {items.job_Location}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Description:</strong> {items.job_Description}
                    <br />
                    <strong>Status:</strong> {items.job_Status}
                    <br />
                    <strong>Type:</strong> {items.job_Type}
                    <br />
                    <strong>Start Date:</strong>{" "}
                    {new Date(items.job_Start_Date).toLocaleString()}
                    <br />
                    <strong>End Date:</strong>{" "}
                    {new Date(items.job_End_Date).toLocaleString()}
                    <br />
                    <strong>Assigned to:</strong> {items.job_Assigned}
                  </Card.Text>

                  <Row sm={2}>
                    <Col>
                      <Button
                        variant="outline-success"
                        size="sm"
                        onClick={() => console.log("Dark")}
                      >
                        <strong>
                          {" "}
                          <FcCheckmark /> Mark as completed{" "}
                        </strong>
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
