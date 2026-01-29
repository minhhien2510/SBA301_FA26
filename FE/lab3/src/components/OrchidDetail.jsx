import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Card, Button, Badge, Spinner, Alert } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;

function OrchidDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [orchid, setOrchid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    // 🛑 Nếu id không tồn tại thì quay về home luôn
    if (!id) {
      setError("Invalid orchid ID!");
      setLoading(false);
      return;
    }

    axios
      .get(`${API_URL}/${id}`) // ✅ chuẩn URL backend
      .then(res => {
        setOrchid(res.data);
        setError("");
      })
      .catch(err => {
        if (err.response?.status === 404) {
          setError("Orchid not found!");
        } else {
          setError("Failed to load orchid!");
        }
      })
      .finally(() => setLoading(false));

  }, [id]);

  // 🔄 Loading
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
        <p className="mt-2">Loading orchid...</p>
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error} 😢</Alert>

        <Button
          variant="secondary"
          className="mt-3"
          onClick={() => navigate("/home")}
        >
          ⬅ Back to Home
        </Button>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Card className="mx-auto shadow-lg" style={{ maxWidth: "720px" }}>
        
        <Card.Img
          variant="top"
          src={orchid?.orchidURL}
          alt={orchid?.orchidName}
          style={{ maxHeight: "420px", objectFit: "cover" }}
        />

        <Card.Body>

          <div className="d-flex justify-content-between align-items-start mb-2">

            <Card.Title className="mb-0 fs-3">
              🌸 {orchid?.orchidName}
            </Card.Title>

            {orchid?.attractive && (
              <Badge bg="warning" text="dark">
                ⭐ Attractive
              </Badge>
            )}

          </div>

          {/* 🌿 Category */}
          <Card.Subtitle className="mb-3 text-muted">
            Category: {orchid?.category?.categoryName || "N/A"}
          </Card.Subtitle>

          <hr />

          {/* 📄 Description */}
          <Card.Text className="text-secondary">
            {orchid?.orchidDescription || "No description available."}
          </Card.Text>

          {/* 📌 Natural info */}
          <div className="mb-3">
            {orchid?.natural ? (
              <Badge bg="success">🌱 Natural Orchid</Badge>
            ) : (
              <Badge bg="secondary">🧪 Artificial Orchid</Badge>
            )}
          </div>

          <div className="d-flex justify-content-between mt-4">

            <Link to="/home">
              <Button variant="outline-secondary">
                ⬅ Back
              </Button>
            </Link>

            {/* ✏️ Edit */}
            <Link to={`/orchid/edit/${orchid?.orchidId}`}>
              <Button variant="warning">
                ✏️ Edit
              </Button>
            </Link>

          </div>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrchidDetail;
