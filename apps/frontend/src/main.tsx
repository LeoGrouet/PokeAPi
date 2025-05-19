import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./style.css";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/HomePage";

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
]);

const rootReactContainer = createRoot(
  document.querySelector("#root") as HTMLElement,
);

rootReactContainer.render(
  <RouterProvider router={router} />
);
