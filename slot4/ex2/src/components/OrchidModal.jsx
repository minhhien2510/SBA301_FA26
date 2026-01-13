// src/components/OrchidModal.jsx
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";

function OrchidModal({ show, handleClose, orchid }) {
  if (!show || !orchid) return null;

  return (
    <div
      className="modal show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Modal.Dialog size="lg" centered>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title className="d-flex gap-2 align-items-center">
            {orchid.orchidName}
            {orchid.isSpecial && <Badge bg="danger">Special</Badge>}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={orchid.image}
            alt={orchid.orchidName}
            className="img-fluid rounded mb-3"
            style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
          />

          <p>
            <strong>Category:</strong> {orchid.category}
          </p>

          <p style={{ textAlign: "justify" }}>{orchid.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default OrchidModal;
