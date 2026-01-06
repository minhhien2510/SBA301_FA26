import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

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
