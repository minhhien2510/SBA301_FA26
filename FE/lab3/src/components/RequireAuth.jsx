import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RequireAuth({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-5">Checking authentication...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
