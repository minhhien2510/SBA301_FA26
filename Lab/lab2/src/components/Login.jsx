import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "123456") {
            // login success -> mark authenticated and redirect to orchidlist
            localStorage.setItem("auth", "true");
            navigate("/orchidlist");
        } else {
            setError("Invalid username or password");
        }
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <Container className="mt-4" style={{ maxWidth: "420px" }}>
            <h3>Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                    />
                </Form.Group>

                <div className="d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default Login;
