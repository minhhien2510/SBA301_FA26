import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import OrchidDetail from "../components/OrchidDetail";
import RequireAuth from "../components/RequireAuth";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* 🔐 Login standalone */}
      <Route path="/login" element={<Login />} />

      {/* 🌱 Chưa login mà vào root → login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* 🔒 SAU LOGIN → dùng layout */}
      <Route
        element={
          <RequireAuth>
            <MainLayout />
          </RequireAuth>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orchid/:id" element={<OrchidDetail />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
