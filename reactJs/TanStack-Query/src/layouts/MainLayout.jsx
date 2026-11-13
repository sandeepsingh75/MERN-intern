import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>
        <h3>My Website Footer</h3>
      </footer>
    </>
  );
}

export default MainLayout;