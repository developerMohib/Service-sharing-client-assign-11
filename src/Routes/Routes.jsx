
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import ToDoService from "../Pages/ToDoService/ToDoService";
import Manage from "../Pages/Manage/Manage";
import AddService from "../Pages/AddService/AddService";
import BookService from "../Pages/BookService/BookService";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Component/ServiceDetails/ServiceDetails";
import BookNow from "../Pages/BookNow/BookNow";
import Update from "../Pages/Update/Update";

export const router = createBrowserRouter([
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
          // loader: async () => {
          //   return fetch(`https://service-sharing-server-tau.vercel.app/eduServices`)
          // }
        },
        {
          path: "/serviceDetails/:id",
          element: <PrivateRoute> <ServiceDetails> </ServiceDetails> </PrivateRoute>,
          loader: async ({ params }) => {
            return fetch(`https://service-sharing-server-tau.vercel.app/eduServices/${params.id}`);
          },
        },
        {
          path: "/contact",
          element: <Contact> </Contact>,
        },
        {
          path: "/todoservice",
          element: <PrivateRoute> <ToDoService> </ToDoService> </PrivateRoute>,
          loader: async () => {
            return fetch(`https://service-sharing-server-tau.vercel.app/bookedServices`);
          },
        },
        {
          path: "/manage",
          element: <PrivateRoute> <Manage> </Manage> </PrivateRoute>,
        },
        {
          path: "/update/:id",
          element: <PrivateRoute> <Update> </Update> </PrivateRoute>,
          loader: async ({params}) => {
            return fetch(`https://service-sharing-server-tau.vercel.app/eduServices/${params.id}`);
          },
        },
        {
          path: "/addService",
          element: <PrivateRoute> <AddService> </AddService> </PrivateRoute>,
        },
        {
          path: "/booked",
          element: <PrivateRoute> <BookService> </BookService> </PrivateRoute> ,
        },
        {
          path: "/booknow/:email",
          element: <PrivateRoute> <BookNow> </BookNow> </PrivateRoute> ,
          loader: async ({ params }) => {
            return fetch(`https://service-sharing-server-tau.vercel.app/eduServices/${params.email}`);
          },
        },
      ],
    },
  ]);