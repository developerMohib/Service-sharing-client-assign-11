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
import { Toaster } from "react-hot-toast";
import Contact from "./Pages/Contact/Contact.jsx";
import ToDoService from "./Pages/ToDoService/ToDoService.jsx";
import Manage from "./Pages/Manage/Manage.jsx";
import AddService from "./Pages/AddService/AddService.jsx";
import BookService from "./Pages/BookService/BookService.jsx";

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
      {
        path: "/contact",
        element: <Contact> </Contact> ,
      },
      {
        path: "/todoservice",
        element: <ToDoService> </ToDoService> ,
      },
      {
        path: "/manage",
        element: <Manage> </Manage> ,
      },
      {
        path: "/addService",
        element: <AddService> </AddService>,
      },
      {
        path: "/booked",
        element: <BookService> </BookService>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider> 
    <RouterProvider router={router}> </RouterProvider>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </Provider>
  </React.StrictMode>
);
