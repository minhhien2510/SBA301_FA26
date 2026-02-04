import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "Admin" && password === "Admin") {
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-4">FUNews Admin Login</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button className="w-100" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
