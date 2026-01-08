import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Orchid({ orchid: propOrchid }) {
    const orchid =
        propOrchid ?? {
            id: "1",
            orchidName: "Ceasar 4N",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porta lobortis ex. Morbi cursus consectetur diam, non lobortis massa gravida eu. Duis molestie purus vel ligula suscipit, sit amet iaculis justo tempus. Cras pellentesque urna in feugiat fringilla. Vivamus dictum lacinia nulla, id rhoncus lectus fermentum et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            category: "Dendrobium",
            isSpecial: true,
            image: "/img/images.jpg",
        };

    return (
        <Card
            style={{ width: "22rem" }}
            className="mx-auto shadow-sm"
        >
            <Card.Img
                variant="top"
                src={orchid.image}
                alt={orchid.orchidName}
            />

            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-center">
                    {orchid.orchidName}
                    {orchid.isSpecial && (
                        <Badge bg="danger">Special</Badge>
                    )}
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    Category: {orchid.category}
                </Card.Subtitle>

                <Card.Text style={{ fontSize: "14px" }}>
                    {orchid.description}
                </Card.Text>

                <Button variant="primary">View Detail</Button>
            </Card.Body>
        </Card>
    );
}

export function OrchidList() {
    return (
        <div className="orchid-list">
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="true">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Ceasar 4N" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Ceasar 4N
                                <Badge bg="danger">Special</Badge>
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Dendrobium
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                A compact Dendrobium with lovely blooms.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="false">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Phalaenopsis White" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Phalaenopsis White
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Phalaenopsis
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                Elegant white phalaenopsis, easy care.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="true">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Cattleya Pink" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Cattleya Pink
                                <Badge bg="danger">Special</Badge>
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Cattleya
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                Fragrant and showy pink cattleya.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="false">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Oncidium Gold" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Oncidium Gold
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Oncidium
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                Bright yellow sprays, perfect for bouquets.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="true">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Dendrobium Snow" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Dendrobium Snow
                                <Badge bg="danger">Special</Badge>
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Dendrobium
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                Small white flowers in long sprays.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: "22rem" }} className="mx-auto shadow-sm" data-is-special="false">
                        <Card.Img variant="top" src="/img/images.jpg" alt="Vanda Blue" />
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center">
                                Vanda Blue
                            </Card.Title>

                            <Card.Subtitle className="mb-2 text-muted">
                                Category: Vanda
                            </Card.Subtitle>

                            <Card.Text style={{ fontSize: "14px" }}>
                                Large vibrant blue flowers, require bright light.
                            </Card.Text>

                            <Button variant="primary">View Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

