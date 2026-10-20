import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import User from "./components/User";
import Manager from "./components/Manager";
import Admin from "./components/Admin";
import Navbar from "./components/Navbar";
import Collage from "./components/Collage";
import Student from "./components/Student";
import Department from "./components/Department";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import LogOut from "./components/Logout";
import Home from "./components/Home";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route element={<PublicRoute />} >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/logout" element={<LogOut />} />

        <Route element={<Protected />}>
          <Route path="/users" element={<User />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/collage" element={<Collage />}>
            <Route path="student" element={<Student />} />
            <Route element={<Department />} path="department" />
            <Route path="details" element={<details />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
