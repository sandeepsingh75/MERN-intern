import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  // Demo ke liye localStorage use kiya hai
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // User login nahi hai
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User ke paas required role nahi hai
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // User authorized hai
  return <Outlet />;
};

export default ProtectedRoute;
