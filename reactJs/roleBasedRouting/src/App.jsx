import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Unauthorized from "./pages/UnAuthorized";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/protectedRoute";
import UserDashboard from "./pages/Userdashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin-only routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* User-only routes */}
        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/user" element={<UserDashboard />} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Unknown routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
