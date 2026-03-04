import { useEffect, useState } from "react";
import { Table, Button, Form, Container } from "react-bootstrap";
import API, { setAuthToken } from "../api/api";

function CarManagement() {

  const [cars, setCars] = useState([]);
  const [countries, setCountries] = useState([]);
  const [form, setForm] = useState({
    carName: "",
    countryID: "",
    unitsInStock: "",
    unitPrice: ""
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setAuthToken(token);

    fetchCars();
  }, []);

  const fetchCars = async () => {
    const res = await API.get("/cars");
    setCars(res.data);
  };

  const handleCreate = async () => {
    try {
      await API.post("/cars", form);
      alert("Created successfully");
      fetchCars();
    } catch {
      alert("Only admin can create!");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      await API.delete("/cars/" + id);
      fetchCars();
    } catch {
      alert("Only admin can delete!");
    }
  };

  return (
    <Container className="mt-4">

      <h3>Cars Management</h3>

      <Form className="mb-4">

        <Form.Control
          className="mb-2"
          placeholder="Car Name"
          onChange={(e) =>
            setForm({...form, carName:e.target.value})
          }
        />

        <Form.Control
          className="mb-2"
          placeholder="Country ID"
          onChange={(e) =>
            setForm({...form, countryID:e.target.value})
          }
        />

        <Form.Control
          className="mb-2"
          type="number"
          placeholder="Units In Stock"
          onChange={(e) =>
            setForm({...form, unitsInStock:e.target.value})
          }
        />

        <Form.Control
          className="mb-2"
          type="number"
          placeholder="Unit Price"
          onChange={(e) =>
            setForm({...form, unitPrice:e.target.value})
          }
        />

        <Button onClick={handleCreate}>
          Create
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Country</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cars.map(c => (
            <tr key={c.carID}>
              <td>{c.carID}</td>
              <td>{c.carName}</td>
              <td>{c.unitsInStock}</td>
              <td>{c.unitPrice}</td>
              <td>{c.countryName}</td>
              <td>{c.createdAt}</td>
              <td>{c.updatedAt}</td>
              <td>
                <Button variant="danger"
                  onClick={() => handleDelete(c.carID)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    </Container>
  );
}

export default CarManagement;