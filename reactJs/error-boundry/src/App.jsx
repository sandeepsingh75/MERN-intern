import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Header from "./components/Header";
import User from "./components/User";
import {BrowserRouter, createBrowserRouter, RouterProvider, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from "./pages/Contact";
import RouteError from "./components/RouteError";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
    errorElement: <RouteError />
  },
  {
    path:"/about",
    element: <About />,
    errorElement: <RouteError />
  },
  {
    path:"/contact",
    element: <Contact />,
    errorElement: <RouteError />
  }
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />

      {/* <h1>My React Application</h1>

        <ErrorBoundary fallback="Header Error">
        <Header />
      </ErrorBoundary>

      <hr />

      <ErrorBoundary fallback="User Component Error">
        <User />
      </ErrorBoundary>

      <hr />

      <ErrorBoundary fallback="Footer Error">
        <Footer />
      </ErrorBoundary> */}

    </div>
  );
}

export default App;
