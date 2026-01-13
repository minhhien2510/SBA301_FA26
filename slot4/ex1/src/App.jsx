import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrchidList from "./components/OrchidList";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header
          searchText={searchText}
          onSearchChange={setSearchText}
        />

        <main className="content">
          <OrchidList searchText={searchText} />
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
