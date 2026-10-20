import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protected;