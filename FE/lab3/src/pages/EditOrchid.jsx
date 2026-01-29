import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Card, Spinner } from "react-bootstrap";

const API_URL = import.meta.env.VITE_API_URL;
const CATEGORY_API = "http://localhost:8080/categories";

function EditOrchid() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Load categories
    axios.get(CATEGORY_API)
      .then(res => setCategories(res.data));

    // Load orchid
    axios.get(`${API_URL}/${id}`)
      .then(res => {
        const o = res.data;

        setForm({
          orchidName: o.orchidName,
          orchidDescription: o.orchidDescription,
          orchidURL: o.orchidURL,
          isNatural: o.isNatural,
          isAttractive: o.isAttractive,
          categoryId: o.category.categoryId
        });

        setLoading(false);
      });

  }, [id]);

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

    await axios.put(`${API_URL}/${id}`, data);

    navigate("/home");
  };

  if (loading || !form) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="mt-5" style={{ maxWidth: 600 }}>
      <Card className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            ✏️ Edit Orchid
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

            <Button type="submit" className="w-100">
              💾 Update Orchid
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditOrchid;
