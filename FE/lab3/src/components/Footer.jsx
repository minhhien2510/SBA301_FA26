import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Footer({ avatar, name, email }) {
  return (
    <footer className="app-footer bg-light py-4 mt-auto">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          
          {/* Avatar */}
          <Col
            xs={12}
            md={2}
            className="d-flex justify-content-center mb-3 mb-md-0"
          >
            <Image
              src={avatar}
              alt="Author Avatar"
              roundedCircle
              style={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
          </Col>

          {/* Author Info */}
          <Col xs={12} md={8} className="mb-3 mb-md-0">
            <h5 className="mb-1">Tác giả: &copy; {name}</h5>
            <small className="text-muted">All rights reserved.</small>
          </Col>

          {/* Email */}
          <Col xs={12} md={2}>
            <a href={`mailto:${email}`}>{email}</a>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
