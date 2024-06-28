import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { IoReloadSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import useJobsSettings from "../../../../Hooks/useJobsSettings";


export const NewJobs = () => {
  const { currentJobs, filteredJobs, filterStatusJobs } = useJobsSettings();
  filterStatusJobs("New");

  const makeRefresh = () => {
    filterStatusJobs("New");
  };

  return (
    <>
      <Container fluid>
        <Button
          variant="info"
          className="mb-3"
          size="sm"
          onClick={() => {
            makeRefresh();
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
              <Card border={"success"}>
                <Card.Header>
                  <strong>{items.job_Name}</strong>
                </Card.Header>
                <Card.Body>
                  <Card.Title></Card.Title>
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
                  <hr />
                  <Row>
                    <Col>
                      <Button
                        className="mr-auto"
                        variant="outline-success"
                        size="sm"
                        onClick={() => console.log("Dark")}
                      >
                        <strong>
                          {" "}
                          <FcCheckmark /> Start this task{" "}
                        </strong>
                      </Button>

                      <Button
                        variant="outline-warning"
                        size="sm"
                        onClick={() => console.log("Dark")}
                      >
                        <strong>
                          {" "}
                          <FaEdit /> Edit this task{" "}
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
