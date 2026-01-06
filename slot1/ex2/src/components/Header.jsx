import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          React-Bootstrap
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/service">
                Service
              </NavDropdown.Item>

              <NavDropdown.Item as={NavLink} to="/profile">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
