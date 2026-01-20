import { useReducer, useState } from "react"; // Thêm useState cho modal
import { Form, Button, Alert, Spinner, Card } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { formReducer, initialFormState } from "../hooks/useFormReducer";
import ConfirmModal from "./ConfirmModal"; // Import modal

function LoginForm() {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { login, loading, error } = useAuth();
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State cho modal success

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
    dispatch({ type: "VALIDATE_FIELD", field: name, value }); // Thêm validation real-time
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation cuối cùng (required)
    const errors = {};
    if (!state.identifier) errors.identifier = "Required";
    if (!state.password) errors.password = "Required";
    dispatch({ type: "SET_ERRORS", errors });
    if (Object.keys(errors).length) return;

    const result = await login(state.identifier, state.password);
    if (result.ok) {
      setShowSuccessModal(true); // Hiển thị modal success
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Có thể thêm redirect ở đây nếu cần, nhưng hiện tại Login.jsx đã handle
  };

  return (
    <>
      <Card className="p-4 mx-auto" style={{ maxWidth: 400 }}>
        <h3 className="text-center mb-3">Login</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              name="identifier"
              placeholder="Username or Email"
              value={state.identifier}
              onChange={handleChange}
              isInvalid={!!state.errors.identifier}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.identifier}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              isInvalid={!!state.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {state.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="w-100" disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Login"}
          </Button>
        </Form>
      </Card>
      <ConfirmModal
        show={showSuccessModal}
        title="Login Successful"
        body="You have logged in successfully!"
        handleClose={handleCloseModal}
        onConfirm={handleCloseModal} // Có thể thay bằng redirect nếu cần
      />
    </>
  );
}

export default LoginForm;