import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <Container className="py-5 page-container">
      <h1 className="page-title text-center mb-4">🌸 About Orchid App</h1>

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm card-box">
            <Card.Body>
              <Card.Title className="mb-3">Project Overview</Card.Title>

              <Card.Text>
                <strong>Orchid App</strong> is a small web application built to
                display and manage an orchid collection. The project focuses on
                applying modern frontend development techniques using React and
                Bootstrap.
              </Card.Text>

              <Card.Text>
                Users can explore different orchid types, search by name, filter
                by category, and sort by price or name. The interface is designed
                to be clean, responsive, and easy to use.
              </Card.Text>

              <hr />

              <Card.Title className="mt-3">Technologies Used</Card.Title>
              <ul>
                <li>⚛️ React (Hooks, Components, Props, State)</li>
                <li>🎨 React Bootstrap & Bootstrap 5</li>
                <li>🧭 React Router DOM</li>
                <li>📦 JavaScript (ES6+)</li>
              </ul>

              <hr />

              <Card.Title className="mt-3">Learning Objectives</Card.Title>
              <ul>
                <li>Build reusable React components</li>
                <li>Manage state and props effectively</li>
                <li>Implement search, filter, and sort features</li>
                <li>Design responsive UI with Bootstrap</li>
              </ul>

              <p className="mt-4 text-muted text-end">
                © 2025 Orchid App – React Project
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
