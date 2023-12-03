import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Root from "../Root/Root";
import PrivateRouter from "../Private/PrivateRouter";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import Event from "../pages/Event";
import Contact from "../pages/Contact";
import Login from "../Login/Login";
import Resigter from "../Resigter/Resigter";
import ErrorPage from "../error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/game.json"),
      },

      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resigter",
        element: <Resigter />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/services",
        element: <Service />,
      },

      {
        path: "/servicedetails/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails />
          </PrivateRouter>
        ),
        loader: () => fetch("/game.json"),
      },
    ],
  },
]);

export default router;
