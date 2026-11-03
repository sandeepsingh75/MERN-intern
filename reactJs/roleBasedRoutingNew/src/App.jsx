import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Manager from "./pages/Manager";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Admin: Access All Routes */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* Users: Admin, Manager and User */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin", "manager", "user"]} />
          }
        >
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Manager: Admin and Manager */}
        <Route element={<ProtectedRoute allowedRoles={["admin", "manager"]} />}>
          <Route path="/manager" element={<Manager />} />
        </Route>
        
        {/* Default Route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
