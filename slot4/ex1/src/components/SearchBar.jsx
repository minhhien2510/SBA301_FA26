import Form from "react-bootstrap/Form";

function SearchBar({ searchText, onSearchChange }) {
  return (
    <Form className="mb-4">
      <Form.Group controlId="searchOrchid">
        <Form.Label>Search Orchid</Form.Label>
        <Form.Control
          type="text"
          placeholder="🔍 Search by orchid name..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;
