import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import LoginModal from "./LoginModal";

function NavigationBar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
        <Navbar.Brand>
          DE180291 - Student Name PE Spring 25
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>

          <NavDropdown title="Car Management">
            <NavDropdown.Item href="/">
              List all cars
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Button variant="outline-light"
          onClick={() => setShowLogin(true)}>
          Login
        </Button>
      </Navbar>

      <LoginModal
        show={showLogin}
        handleClose={() => setShowLogin(false)}
      />
    </>
  );
}

export default NavigationBar;