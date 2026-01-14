import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom"; // import Link

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
          {orchid.description.slice(0, 80)}...
        </Card.Text>

        {/* PRICE */}
        <div className="fw-bold text-success mb-2">
          💰 Price: ${orchid.price}
        </div>

        {/* Navigate to OrchidDetail page */}
        <Link to={`/orchid/${orchid.id}`}>
          <Button size="sm" variant="primary">
            View Detail
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Orchid;
