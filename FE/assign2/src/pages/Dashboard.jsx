import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { getAllNews, getCategories, getAccounts } from "../api/api";

export default function Dashboard() {
  const [newsCount, setNewsCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [newsRes, catRes, userRes] = await Promise.all([
          getAllNews(),
          getCategories(),
          getAccounts(),
        ]);
        setNewsCount(newsRes.data?.length || 0);
        setCategoryCount(catRes.data?.length || 0);
        setUserCount(userRes.data?.length || 0);
      } catch (err) {
        console.error("Failed to load dashboard data", err);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <h3>Dashboard</h3>
      <Row className="mt-3">
        <Col md={3}>
          <Card bg="primary" text="white">
            <Card.Body>
              <Card.Title>News</Card.Title>
              <h2>{newsCount}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title>Categories</Card.Title>
              <h2>{categoryCount}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card bg="warning" text="white">
            <Card.Body>
              <Card.Title>Users</Card.Title>
              <h2>{userCount}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
