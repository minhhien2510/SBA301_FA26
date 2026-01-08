import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrchidList from "./components/OrchidList";
import orchidData from "./data/orchidData";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="content container my-4">
          <h2 className="text-center mb-4">🌸 Orchid Collection</h2>

          
          <OrchidList orchids={orchidData} />
        </main>

        <Footer
          avatar="/img/anh.webp"
          name="traltb"
          email="hienhmde@fpt.edu.vn"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
