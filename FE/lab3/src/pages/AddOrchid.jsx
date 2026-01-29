import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;
const CATEGORY_API = "http://localhost:8080/categories";

function AddOrchid() {

  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    orchidName: "",
    orchidDescription: "",
    orchidURL: "",
    isNatural: false,
    isAttractive: false,
    categoryId: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(CATEGORY_API)
      .then(res => setCategories(res.data));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      orchidName: form.orchidName,
      orchidDescription: form.orchidDescription,
      orchidURL: form.orchidURL,
      isNatural: form.isNatural,
      isAttractive: form.isAttractive,
      category: {
        categoryId: form.categoryId
      }
    };

    await axios.post(API_URL, data);

    navigate("/home");
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 600 }}>
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            🌸 Add Orchid
          </Card.Title>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="orchidName"
                value={form.orchidName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>

              <Form.Select
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Category --</option>

                {categories.map(c => (
                  <option 
                    key={c.categoryId} 
                    value={c.categoryId}
                  >
                    {c.categoryName}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="orchidDescription"
                value={form.orchidDescription}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="orchidURL"
                value={form.orchidURL}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Check
              className="mb-2"
              type="checkbox"
              label="Natural Orchid"
              name="isNatural"
              checked={form.isNatural}
              onChange={handleChange}
            />

            <Form.Check
              className="mb-4"
              type="checkbox"
              label="Attractive Orchid"
              name="isAttractive"
              checked={form.isAttractive}
              onChange={handleChange}
            />

            <Button 
              type="submit" 
              className="w-100" 
              variant="success"
            >
              ➕ Add Orchid
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddOrchid;
