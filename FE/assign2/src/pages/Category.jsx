import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Badge } from "react-bootstrap";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    categoryName: "",
    categoryDescription: "",
    parentCategory: null,
    isActive: 1,
  });

  const loadCategories = async () => {
    try {
      setLoading(true);
      const res = await getCategories();
      setCategories(res.data || []);
    } catch (err) {
      console.error("Failed to load categories", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSave = async () => {
    try {
      if (editingId) {
        await updateCategory(editingId, form);
      } else {
        await createCategory(form);
      }
      await loadCategories();
      setShow(false);
      setEditingId(null);
      resetForm();
    } catch (err) {
      console.error("Failed to save category", err);
    }
  };

  const resetForm = () => {
    setForm({
      categoryName: "",
      categoryDescription: "",
      parentCategory: null,
      isActive: 1,
    });
  };

  const handleEdit = (c) => {
    setEditingId(c.categoryId);
    setForm({
      categoryName: c.categoryName,
      categoryDescription: c.categoryDescription,
      parentCategory: c.parentCategory ?? null,
      isActive: c.isActive ?? 1,
    });
    setShow(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this category?")) return;
    try {
      await deleteCategory(id);
      await loadCategories();
    } catch (err) {
      console.error("Failed to delete category", err);
    }
  };

  return (
    <>
      <h3>Category Management</h3>

      <Button className="mb-3" onClick={() => setShow(true)}>
        Add Category
      </Button>

      {loading && <p>Loading...</p>}

      <Table bordered striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
            <th width="200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c.categoryId}>
              <td>{c.categoryId}</td>
              <td>{c.categoryName}</td>
              <td>{c.categoryDescription}</td>
              <td>
                {c.isActive ? (
                  <Badge bg="success">Active</Badge>
                ) : (
                  <Badge bg="secondary">Inactive</Badge>
                )}
              </td>
              <td>
                <Button size="sm" onClick={() => handleEdit(c)}>
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(c.categoryId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              value={form.categoryName}
              onChange={(e) =>
                setForm({ ...form, categoryName: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={form.categoryDescription}
              onChange={(e) =>
                setForm({ ...form, categoryDescription: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={form.isActive}
              onChange={(e) =>
                setForm({ ...form, isActive: Number(e.target.value) })
              }
            >
              <option value={1}>Active</option>
              <option value={0}>Inactive</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
