import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Check authentication
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Check authorization
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;