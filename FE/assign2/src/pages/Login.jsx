import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    try {
      setLoading(true);
      const response = await loginApi(email, password);

      // Giả định API trả về { token, account }
      const { token, account } = response.data;
      localStorage.setItem("token", token);
      if (account) {
        localStorage.setItem("account", JSON.stringify(account));
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-4">FUNews Admin Login</h3>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <Button className="w-100" type="submit" disabled={loading}>
          {loading ? "Đang đăng nhập..." : "Login"}
        </Button>
      </Form>
    </Container>
  );
}
