import axios from "axios";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function Orchid({ orchid }) {

  const handleDelete = async () => {
    if (window.confirm("Delete this orchid?")) {
      await axios.delete(`${API_URL}/${orchid.orchidId}`);
      window.location.reload();
    }
  };

  return (
    <Card className="orchid-card h-100 shadow-sm border-0">

      {/* Image */}
      <div className="orchid-img-wrapper">
        <Card.Img
          src={orchid.orchidURL || "/placeholder.jpg"}
          alt={orchid.orchidName}
          className="orchid-img"
        />
      </div>

      <Card.Body className="d-flex flex-column">

        {/* Title */}
        <div className="d-flex justify-content-between align-items-center mb-1">
          <h6 className="fw-bold mb-0 text-truncate">
            {orchid.orchidName}
          </h6>

          {orchid.attractive && (
            <Badge bg="danger" pill>
              Hot
            </Badge>
          )}
        </div>

        {/* Category */}
        <small className="text-muted mb-2">
          {orchid.category?.categoryName || "No category"}
        </small>

        {/* Description */}
        <Card.Text className="orchid-desc flex-grow-1">
          {orchid.orchidDescription
            ? orchid.orchidDescription
            : "No description available"}
        </Card.Text>

        {/* Buttons */}
        <div className="d-flex gap-2 mt-2">

          <Link to={`/orchid/${orchid.orchidId}`} className="flex-fill">
            <Button variant="primary" size="sm" className="w-100">
              View
            </Button>
          </Link>

          <Button
            variant="outline-danger"
            size="sm"
            className="flex-fill"
            onClick={handleDelete}
          >
            Delete
          </Button>

        </div>

      </Card.Body>
    </Card>
  );
}

export default Orchid;
