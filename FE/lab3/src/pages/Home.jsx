import { useOutletContext, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import OrchidList from "../components/OrchidList";

function Home() {
  const { searchText } = useOutletContext();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🌸 Orchid Collection</h2>

        {/* ➕ ADD BUTTON ĐẶT Ở ĐÂY */}
        <Link to="/orchid/add">
          <Button variant="success">
            ➕ Add Orchid
          </Button>
        </Link>
      </div>

      <OrchidList searchText={searchText} />
    </>
  );
}

export default Home;
