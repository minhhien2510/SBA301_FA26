import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
