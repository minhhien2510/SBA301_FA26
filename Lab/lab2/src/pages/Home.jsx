import { useOutletContext } from "react-router-dom";
import OrchidList from "../components/OrchidList";

function Home() {
  const { searchText } = useOutletContext();

  return (
    <>
      <h2 className="text-center mb-4">
        🌸 Orchid Collection
      </h2>
      <OrchidList searchText={searchText} />
    </>
  );
}

export default Home;
