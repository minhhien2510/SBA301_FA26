import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // TODO: thay bằng logic auth thật

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
