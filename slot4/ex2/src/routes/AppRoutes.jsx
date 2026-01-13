// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OrchidDetail from "../components/OrchidDetail"; // import trang detail

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Route chi tiết hoa */}
      <Route path="/orchid/:id" element={<OrchidDetail />} />
    </Routes>
  );
}

export default AppRoutes;
