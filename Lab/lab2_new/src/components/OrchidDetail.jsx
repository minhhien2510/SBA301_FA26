// src/pages/OrchidDetail.jsx
import { useParams, Link } from "react-router-dom";
import orchidData from "../data/orchidData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function OrchidDetail() {
  const { id } = useParams();

  // Tìm hoa dựa trên id từ URL
  const orchid = orchidData.find((item) => item.id === id);

  if (!orchid) {
    return (
      <div className="page-container text-center mt-5">
        <h2>Orchid not found 😢</h2>
        <Link to="/">
          <Button variant="secondary" className="mt-3">
            ⬅ Back
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container my-4">
      <Card className="mx-auto shadow" style={{ maxWidth: "600px" }}>
        {orchid.image && (
          <Card.Img
            variant="top"
            src={orchid.image}
            alt={orchid.orchidName}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        )}
        <Card.Body>
          <Card.Title className="mb-3">{orchid.orchidName}</Card.Title>

          <Card.Text>
            <strong>Category:</strong> {orchid.category} <br />
            <strong>Price:</strong> ${orchid.price} <br />
            <strong>Special:</strong> {orchid.isSpecial ? "Yes 🌟" : "No"} <br />
          </Card.Text>

          <Card.Text>{orchid.description}</Card.Text>

          <Link to="/home">
            <Button variant="secondary">⬅ Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrchidDetail;
