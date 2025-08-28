import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./style.css";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      }
    ],
  },
  {
    path: "/pokemon/:id",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PokemonDetailsPage />,
      }
    ]
  },
]);

const rootReactContainer = createRoot(
  document.querySelector("#root") as HTMLElement,
);

rootReactContainer.render(
  <RouterProvider router={router} />
);
