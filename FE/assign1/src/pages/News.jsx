import { useState } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import newData from "../data/news.js";
export default function News() {
  const [newsList, setNewsList] = useState(newData);

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    title: "",
    category: "",
    tags: "",
    status: 1,
  });
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (editingId) {
      setNewsList(
        newsList.map((n) => (n.id === editingId ? { ...form, id: editingId } : n))
      );
    } else {
      setNewsList([...newsList, { ...form, id: Date.now() }]);
    }
    setShow(false);
    setForm({ title: "", category: "", tags: "", status: 1 });
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this news?")) {
      setNewsList(newsList.filter((n) => n.id !== id));
    }
  };

  const filteredNews = newsList.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h3>News Management</h3>

      <Row className="mb-2">
        <Col md={4}>
          <Form.Control
            placeholder="Search by title..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col md={8} className="text-end">
          <Button onClick={() => setShow(true)}>Add News</Button>
        </Col>
      </Row>

      <Table bordered striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Status</th>
            <th width="200">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredNews.map((n) => (
            <tr key={n.id}>
              <td>{n.title}</td>
              <td>{n.category}</td>
              <td>{n.tags}</td>
              <td>{n.status ? "Active" : "Inactive"}</td>
              <td>
                <Button
                  size="sm"
                  onClick={() => {
                    setEditingId(n.id);
                    setForm(n);
                    setShow(true);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => handleDelete(n.id)}
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
          <Modal.Title>News Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            >
              <option value="">Select</option>
              <option>Education</option>
              <option>Technology</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tags (comma separated)</Form.Label>
            <Form.Control
              value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
