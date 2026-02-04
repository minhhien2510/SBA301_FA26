import { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import {
  getAccounts,
  createAccount,
  deleteAccount,
} from "../api/api";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ username: "", role: 2 });

  const loadUsers = async () => {
    try {
      const res = await getAccounts();
      setUsers(res.data || []);
    } catch (err) {
      console.error("Failed to load users", err);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const saveUser = async () => {
    try {
      await createAccount(form);
      await loadUsers();
      setShow(false);
    } catch (err) {
      console.error("Failed to create user", err);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    try {
      await deleteAccount(id);
      await loadUsers();
    } catch (err) {
      console.error("Failed to delete user", err);
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
          {users.map((u) => {
            const accountId = u.accountId ?? u.id;
            const displayName = u.username || u.email || u.fullName || "";
            const roleValue =
              typeof u.role === "number" || typeof u.role === "string"
                ? u.role
                : u.role?.roleId ?? 2;
            const isAdmin =
              roleValue === 1 || roleValue === "1" || roleValue === "ADMIN";

            return (
              <tr key={accountId}>
                <td>{displayName}</td>
                <td>{isAdmin ? "Admin" : "Staff"}</td>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => deleteUser(accountId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
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
