import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error-page.jsx";
import Services from "./components/services.jsx";
import Work from "./components/work.jsx";
import Testimonials from "./components/testimonials.jsx";
import About from "./components/about.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/works",
    element: <Work />,
  },
  {
    path: "/testimonial",
    element: <Testimonials />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div>Page is loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
