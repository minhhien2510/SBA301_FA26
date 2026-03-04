import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import API, { setAuthToken } from "../api/api";

function LoginModal({ show, handleClose }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", {
        email,
        password
      });

      const token = res.data.token || res.data;
      localStorage.setItem("token", token);
      setAuthToken(token);

      alert("Login successful!");
      handleClose();
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          Login to Cars Management System
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"
          onClick={handleClose}>
          Close
        </Button>

        <Button variant="primary"
          onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;