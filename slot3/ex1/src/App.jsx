import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { OrchidList } from "./components/Orchid";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="content">
          <AppRoutes />

          <hr />

          <h2>Orchid preview</h2>
          <OrchidList />
        </main>

        <Footer avartar="/img/anh.webp" name="hienhm" email="hienhmde@fpt.edu.vn" />
      </div>
    </BrowserRouter>
  );
}

export default App;
