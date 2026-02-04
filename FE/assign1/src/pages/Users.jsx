import { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import userData from "../data/users.js";
export default function Users() {
  const [users, setUsers] = useState(userData)

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ username: "", role: 2 });

  const saveUser = () => {
    setUsers([...users, { ...form, id: Date.now() }]);
    setShow(false);
  };

  const deleteUser = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <>
      <h3>User Management</h3>
      <Button className="mb-2" onClick={() => setShow(true)}>
        Add User
      </Button>

      <Table bordered>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th width="150">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.username}</td>
              <td>{u.role === 1 ? "Admin" : "Staff"}</td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Username"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <Form.Select
            className="mt-2"
            onChange={(e) => setForm({ ...form, role: +e.target.value })}
          >
            <option value={2}>Staff</option>
            <option value={1}>Admin</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={saveUser}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
