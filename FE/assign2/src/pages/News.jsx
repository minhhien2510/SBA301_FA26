import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Row, Col } from "react-bootstrap";
import {
  getAllNews,
  searchNews,
  createNews,
  updateNews,
  deleteNews,
} from "../api/api";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    title: "",
    categoryName: "",
    tagsText: "",
    status: true,
  });
  const [editingId, setEditingId] = useState(null);

  const loadNews = async (params) => {
    try {
      let res;
      if (params?.keyword) {
        res = await searchNews({ keyword: params.keyword });
      } else {
        res = await getAllNews();
      }
      setNewsList(res.data || []);
    } catch (err) {
      console.error("Failed to load news", err);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleSave = async () => {
    try {
      const payload = {
        newsTitle: form.title,
        headline: form.title,
        newsContent: "", // TODO: map from form when có field nội dung chi tiết
        newsSource: "WEB",
        newsStatus: !!form.status,
        // TODO: category & tags: cần thêm UI chọn categoryId/tagIds rồi map vào đây
      };

      if (editingId) {
        await updateNews(editingId, payload);
      } else {
        await createNews(payload);
      }
      await loadNews();
      setShow(false);
      setForm({ title: "", categoryName: "", tagsText: "", status: true });
      setEditingId(null);
    } catch (err) {
      console.error(
        "Failed to save news",
        err.response?.data || err.message || err
      );
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this news?")) return;
    try {
      await deleteNews(id);
      await loadNews();
    } catch (err) {
      console.error("Failed to delete news", err);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (!value) {
      loadNews();
    } else {
      loadNews({ keyword: value });
    }
  };

  const filteredNews = newsList;

  return (
    <>
      <h3>News Management</h3>

      <Row className="mb-2">
        <Col md={4}>
          <Form.Control
            placeholder="Search by title..."
            value={search}
            onChange={handleSearchChange}
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
          {filteredNews.map((n, index) => {
            const newsId = n.newsArticleId ?? n.id ?? index;
            const title = n.newsTitle ?? n.title ?? "";
            const categoryText = n.category?.categoryName ?? "";
            const tagsText = Array.isArray(n.tags)
              ? n.tags.map((t) => t.tagName).join(", ")
              : typeof n.tags === "string"
              ? n.tags
              : "";
            const isActive = n.newsStatus ?? n.status ?? false;

            return (
              <tr key={newsId}>
                <td>{title}</td>
                <td>{categoryText}</td>
                <td>{tagsText}</td>
                <td>{isActive ? "Active" : "Inactive"}</td>
                <td>
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditingId(newsId);
                      setForm({
                        title,
                        categoryName: categoryText,
                        tagsText,
                        status: isActive,
                      });
                      setShow(true);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(newsId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
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
              value={form.categoryName}
              onChange={(e) =>
                setForm({ ...form, categoryName: e.target.value })
              }
            >
              <option value="">Select</option>
              <option>Education</option>
              <option>Technology</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tags (comma separated)</Form.Label>
            <Form.Control
              value={form.tagsText}
              onChange={(e) => setForm({ ...form, tagsText: e.target.value })}
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
