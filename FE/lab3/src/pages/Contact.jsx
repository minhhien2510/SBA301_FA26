// src/pages/Contact.jsx
import { useState } from "react";
import { Form, Button, Row, Col, InputGroup,Container  } from "react-bootstrap";
import ConfirmModal from "../components/ConfirmModal";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ================= VALIDATE =================
  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-zÀ-ỹ\s]{2,}$/.test(formData.firstName.trim()))
      newErrors.firstName = "First name must be at least 2 letters (no numbers)";

    if (!/^[A-Za-zÀ-ỹ\s]{2,}$/.test(formData.lastName.trim()))
      newErrors.lastName = "Last name must be at least 2 letters (no numbers)";

    if (!/^\S{4,}$/.test(formData.username))
      newErrors.username = "Username must be at least 4 chars, no spaces";

    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!/^[A-Za-zÀ-ỹ\s]+$/.test(formData.city.trim()))
      newErrors.city = "City cannot contain numbers";

    if (!/^[A-Za-zÀ-ỹ\s]+$/.test(formData.state.trim()))
      newErrors.state = "State cannot contain numbers";

    if (!/^\d{5}$/.test(formData.zip))
      newErrors.zip = "Zip must be exactly 5 digits";

    if (!formData.agree)
      newErrors.agree = "You must agree before submitting";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  // ================= DATA FOR MODAL =================
  const confirmInfo = {
    name: `${formData.firstName} ${formData.lastName}`,
    username: `@${formData.username}`,
    email: formData.email,
    address: `${formData.city}, ${formData.state}`,
    zip: formData.zip,
  };

  return (
    <Container className="py-4">
      <div className="page-container">
      <h1 className="page-title">Contact Us</h1>

      <div className="card-box">
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4">
              <Form.Label>Username</Form.Label>
              <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <Form.Control
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                value={formData.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                value={formData.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="3">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Check
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              isInvalid={!!errors.agree}
              label="Agree to terms and conditions"
              feedback={errors.agree}
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </div>

      <ConfirmModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        body={
          <>
            <p><strong>Name:</strong> {confirmInfo.name}</p>
            <p><strong>Username:</strong> {confirmInfo.username}</p>
            <p><strong>Email:</strong> {confirmInfo.email}</p>
            <p><strong>Address:</strong> {confirmInfo.address}</p>
            <p><strong>Zip:</strong> {confirmInfo.zip}</p>
          </>
        }
      />
    </div>
    </Container>
  );
}

export default Contact;
