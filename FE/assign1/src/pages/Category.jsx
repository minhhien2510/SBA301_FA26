import { useState } from "react";
import { Table, Button, Modal, Form, Badge } from "react-bootstrap";
import categoriesData from "../data/categories";

export default function Categories() {
  const [categories, setCategories] = useState(categoriesData);
  const [show, setShow] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    categoryName: "",
    categoryDescription: "",
    parentCategory: null,
    isActive: 1,
  });

  const handleSave = () => {
    if (editingId) {
      setCategories(
        categories.map((c) =>
          c.categoryID === editingId
            ? { ...c, ...form }
            : c
        )
      );
    } else {
      setCategories([
        ...categories,
        {
          categoryID: Date.now(),
          ...form,
          subCategories: [],
        },
      ]);
    }

    setShow(false);
    setEditingId(null);
    resetForm();
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
    setEditingId(c.categoryID);
    setForm({
      categoryName: c.categoryName,
      categoryDescription: c.categoryDescription,
      parentCategory: c.parentCategory,
      isActive: c.isActive,
    });
    setShow(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this category?")) {
      setCategories(categories.filter((c) => c.categoryID !== id));
    }
  };

  return (
    <>
      <h3>Category Management</h3>

      <Button className="mb-3" onClick={() => setShow(true)}>
        Add Category
      </Button>

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
            <tr key={c.categoryID}>
              <td>{c.categoryID}</td>
              <td>{c.categoryName}</td>
              <td>{c.categoryDescription}</td>
              <td>
                {c.isActive === 1 ? (
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
                  onClick={() => handleDelete(c.categoryID)}
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
