
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // Demo only: real app mein backend se
    // verified authentication result use karein
    localStorage.setItem("token", "demo-token");
    localStorage.setItem("role", role);

    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={() => handleLogin("admin")}>
        Admin Login
      </button>

      <button onClick={() => handleLogin("user")}>
        User Login
      </button>
    </div>
  );
};

export default Login;
