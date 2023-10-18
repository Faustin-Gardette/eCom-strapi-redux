import React from "react";
import Women from "./pages/Women";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Men from "./pages/Men";
import Navbar from "./components/Navbar";
import Panier from "./pages/Panier";

const Layout = () => {
  return (
    <>
      <header className="primary-back px-8 py-8">
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="primary-back px-8 py-8">
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Accueil />,
      },
      {
        path: "/femme",
        element: <Women />,
      },
      {
        path: "/homme",
        element: <Men />,
      },
      {
        path: "/panier",
        element: <Panier />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
