import axios from "axios";
import { useState, useMemo, useEffect } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Orchid from "./Orchid";
import FilterSort from "./FilterSort";

const API_URL = import.meta.env.VITE_API_URL;

function OrchidList({ searchText = "" }) {

  const [orchids, setOrchids] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setOrchids(res.data))
      .catch(err => {
        console.error(err);
        setError("Failed to load orchids");
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ lấy category từ object category
  const categories = useMemo(() => {
    return [
      ...new Set(
        orchids.map(o => o.category?.categoryName).filter(Boolean)
      )
    ];
  }, [orchids]);

  // ✅ filter chuẩn backend
  const filteredOrchids = useMemo(() => {
    return orchids.filter(o => {

      const matchCategory =
        !filterCategory ||
        o.category?.categoryName === filterCategory;

      const matchSearch =
        o.orchidName
          .toLowerCase()
          .includes(searchText.toLowerCase());

      return matchCategory && matchSearch;
    });

  }, [orchids, filterCategory, searchText]);

  const sortedOrchids = useMemo(() => {
    const result = [...filteredOrchids];

    switch (sortOption) {
      case "name-asc":
        return result.sort((a, b) =>
          a.orchidName.localeCompare(b.orchidName));

      case "name-desc":
        return result.sort((a, b) =>
          b.orchidName.localeCompare(a.orchidName));

      default:
        return result;
    }
  }, [filteredOrchids, sortOption]);

  if (loading)
    return <p className="text-center mt-5">Loading orchids...</p>;

  if (error)
    return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="py-4">

      <FilterSort
        categories={categories}
        onFilterChange={setFilterCategory}
        onSortChange={setSortOption}
      />

      <Row className="g-4 mt-3">

        {sortedOrchids.map(orchid => (

          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={orchid.orchidId}   // ✅ fix key
          >

            <Orchid orchid={orchid} />

          </Col>

        ))}

      </Row>

    </Container>
  );
}

export default OrchidList;
