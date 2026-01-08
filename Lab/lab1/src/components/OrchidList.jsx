// src/components/OrchidList.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Orchid from "./Orchid";

function OrchidList({ orchids }) {
  return (
    <Row className="g-4">
      {orchids.map((orchid) => (
        <Col md={4} key={orchid.id}>
          <Orchid orchid={orchid} />
        </Col>
      ))}
    </Row>
  );
}

export default OrchidList;
