import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="content">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
