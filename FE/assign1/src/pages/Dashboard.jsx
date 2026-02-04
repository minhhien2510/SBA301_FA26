import { Card, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <h3>Dashboard</h3>
      <Row className="mt-3">
        <Col md={3}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>News</Card.Title>
              <h2>12</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <h2>5</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white">
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <h2>3</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
