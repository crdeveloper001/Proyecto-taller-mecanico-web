import { Navigation } from "../../Routes/Navigation/Navigation";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaWrench, FaClipboardList, FaFileInvoice } from "react-icons/fa";

export const Dashboard = () => {
  const modules = [
    {
      title: "Pending Jobs",
      description: "View and manage ongoing repair tasks",
      href: "pending-jobs",
      icon: FaWrench,
      color: "primary"
    },
    {
      title: "Diagnostics",
      description: "Create and review vehicle diagnostics",
      href: "diagnostics",
      icon: FaClipboardList,
      color: "info"
    },
    {
      title: "Quotes",
      description: "Generate and track service quotes",
      href: "quotes",
      icon: FaFileInvoice,
      color: "success"
    }
  ];

  return (
    <>
      <Navigation />
      <Container fluid className="py-5">
        <div className="mb-5">
          <h1 className="display-5 fw-bold">Dashboard</h1>
          <p className="text-muted fs-5">Manage your workshop operations</p>
        </div>
        
        <Row className="g-4">
          {modules.map((module) => (
            <Col md={6} lg={4} key={module.href}>
              <Card className="h-100 shadow-sm border-0 hover-shadow transition">
                <Card.Body className="d-flex flex-column p-4">
                  <module.icon size={40} className={`text-${module.color} mb-3`} />
                  <Card.Title className="fs-5 fw-bold mb-2">{module.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1 mb-3">
                    {module.description}
                  </Card.Text>
                  <Button 
                    href={module.href} 
                    variant={module.color}
                    className="mt-auto"
                  >
                    Access Module
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
