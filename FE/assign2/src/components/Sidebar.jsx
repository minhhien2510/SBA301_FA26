import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Nav className="flex-column p-3 text-white">
      <Nav.Link as={Link} to="/admin/dashboard" className="text-white">
        Dashboard
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/categories" className="text-white">
        Category
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/news" className="text-white">
        News
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/users" className="text-white">
        Users
      </Nav.Link>
      <Nav.Link as={Link} to="/admin/settings" className="text-white">
        Settings
      </Nav.Link>
    </Nav>
  );
}
