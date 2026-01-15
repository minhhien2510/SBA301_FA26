import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // VALIDATION
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    if (username === "admin" && password === "123456") {
      // Login success
      localStorage.setItem("auth", "true");
      navigate("/home"); // về Home
    } else {
      setError("Invalid username or password");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button type="submit">Login</Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Login;
