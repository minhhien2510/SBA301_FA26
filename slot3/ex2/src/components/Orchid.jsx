// src/components/Orchid.jsx
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function Orchid({ orchid }) {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={orchid.image}
        alt={orchid.orchidName}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          {orchid.orchidName}
          {orchid.isSpecial && <Badge bg="danger">Special</Badge>}
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          {orchid.category}
        </Card.Subtitle>

        <Card.Text style={{ fontSize: "14px" }}>
          {orchid.description}
        </Card.Text>

        <Button size="sm" variant="primary">
          View Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Orchid;
