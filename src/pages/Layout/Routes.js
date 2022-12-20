import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Notfound from "../Notfound/Notfound";
import Root from "./Root";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import AllService from "../AllService/AllService";
import ShowDetails from "../ShowDetails/ShowDetails";
import MyReviews from "../MyReviews/MyReviews";
import AddService from "./../AllService/AddService";
import Blog from "./../Home/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Faq from "./../Home/Faq/Faq";
import Contact from "./../Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/allServices",
        loader: () =>
          fetch("https://fullstack-assignment11-server.vercel.app/allServices"),
        element: <AllService></AllService>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(
            `https://fullstack-assignment11-server.vercel.app/services/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ShowDetails></ShowDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
