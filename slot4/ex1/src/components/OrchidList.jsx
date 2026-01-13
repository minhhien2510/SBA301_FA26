import { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Orchid from "./Orchid";
import FilterSort from "./FilterSort";
import orchidData from "../data/orchidData";

function OrchidList({ searchText }) {
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const categories = [...new Set(orchidData.map(o => o.category))];

  // 1️⃣ FILTER + SEARCH
  let filteredOrchids = orchidData.filter((orchid) => {
    const matchCategory =
      filterCategory === "" || orchid.category === filterCategory;

    const matchSearch =
      orchid.orchidName
        .toLowerCase()
        .includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });

  // 2️⃣ SORT
  const sortedOrchids = [...filteredOrchids];

  switch (sortOption) {
    case "price-asc":
      sortedOrchids.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sortedOrchids.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      sortedOrchids.sort((a, b) =>
        a.orchidName.localeCompare(b.orchidName)
      );
      break;
    case "name-desc":
      sortedOrchids.sort((a, b) =>
        b.orchidName.localeCompare(a.orchidName)
      );
      break;
    default:
      break;
  }

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">🌸 Orchid Collection</h2>

      {/* FILTER + SORT */}
      <FilterSort
        categories={categories}
        onFilterChange={setFilterCategory}
        onSortChange={setSortOption}
      />

      <Row className="g-4 mt-3">
        {sortedOrchids.map((orchid) => (
          <Col md={3} sm={6} key={orchid.id} className="d-flex">
            <Orchid orchid={orchid} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default OrchidList;
