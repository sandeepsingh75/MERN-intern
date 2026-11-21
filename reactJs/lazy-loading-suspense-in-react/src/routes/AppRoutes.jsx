import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import MainLayout from "../layouts/MainLayout";
const Home = lazy(() => import("../pages/Home"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Users = lazy(() => import("../pages/Users"));
const Products = lazy(() => import("../pages/Products"));
const Reports = lazy(() => import("../pages/Reports"));

const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: "dashboard",
        element: withSuspense(Dashboard),
      },
      {
        path: "users",
        element: withSuspense(Users),
      },
      {
        path: "products",
        element: withSuspense(Products),
      },
      {
        path: "reports",
        element: withSuspense(Reports),
      },
    ],
  },
]);
