import { useState, useMemo } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Orchid from "./Orchid";
import FilterSort from "./FilterSort";
import orchidData from "../data/orchidData";

function OrchidList({ searchText = "" }) {
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  // 🔹 Categories (chỉ tính 1 lần)
  const categories = useMemo(() => {
    return [...new Set(orchidData.map(o => o.category))];
  }, []);

  // 🔹 FILTER + SEARCH
  const filteredOrchids = useMemo(() => {
    return orchidData.filter((orchid) => {
      const matchCategory =
        filterCategory === "" || orchid.category === filterCategory;

      const matchSearch =
        orchid.orchidName
          .toLowerCase()
          .includes(searchText.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [filterCategory, searchText]);

  // 🔹 SORT
  const sortedOrchids = useMemo(() => {
    const result = [...filteredOrchids];

    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) =>
          a.orchidName.localeCompare(b.orchidName)
        );
        break;
      case "name-desc":
        result.sort((a, b) =>
          b.orchidName.localeCompare(a.orchidName)
        );
        break;
      default:
        break;
    }

    return result;
  }, [filteredOrchids, sortOption]);

  return (
    <Container className="py-4">
      <FilterSort
        categories={categories}
        onFilterChange={setFilterCategory}
        onSortChange={setSortOption}
      />

      <Row className="g-4 mt-3">
        {sortedOrchids.map((orchid) => (
          <Col xs={12} sm={6} md={4} lg={3} key={orchid.id} className="d-flex">
            <Orchid orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OrchidList;
