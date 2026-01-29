import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import LoginForm  from "../components/LoginForm.jsx";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // 👉 Nếu login thành công thì redirect
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home"); // hoặc /orchids
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container className="mt-5">
      <LoginForm />
    </Container>
  );
}

export default Login;
