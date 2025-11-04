// ? imports

// React
import React from "react";

// Components
import App from "./App.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import Aboutpage from "./pages/About/Aboutpage.jsx";
import FavoritesPage from "./pages/Favorites/FavoritesPage.jsx";
import ToggleThemeSwitch from "./Components/Dic_Header/ToggleThemeSwitch/ToggleThemeSwitch.jsx";

// RRD
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Assets

// Styles

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <Aboutpage /> }, // "/about"
      { path: "favorites", element: <FavoritesPage /> }, // "/favorites"
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
