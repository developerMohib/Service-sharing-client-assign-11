import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Root/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Login from "./Pages/Login/Login.jsx";
import Registration from "./Pages/Registration/Registration.jsx";
import Home from "./Pages/Home/Home.jsx";
import Provider from "./Provider/Provider.jsx";
import Services from "./Pages/Services/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home> </Home>,
      },
      {
        path: "/login",
        element: <Login> </Login>,
      },
      {
        path: "/register",
        element: <Registration> </Registration>,
      },
      {
        path: "/services",
        element: <Services> </Services>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider> 
    <RouterProvider router={router}> </RouterProvider>
    </Provider>
  </React.StrictMode>
);
