import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2} className="bg-dark min-vh-100 p-0">
            <Sidebar />
          </Col>
          <Col md={10} className="p-4">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
