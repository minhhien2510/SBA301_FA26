// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import OrchidDetail from "../components/OrchidDetail"; // import trang detail
import Login from "../components/Login"; // login form (username/password)

// simple auth guard component
function RequireAuth({ children }) {
  const isAuth = localStorage.getItem("auth") === "true";
  return isAuth ? children : <Navigate to="/" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      {/* default entry -> Login page */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Protect orchid list and detail with auth guard */}
      <Route path="/orchidlist" element={<RequireAuth><Home /></RequireAuth>} />
      <Route path="/orchid/:id" element={<RequireAuth><OrchidDetail /></RequireAuth>} />
    </Routes>
  );
}

export default AppRoutes;
