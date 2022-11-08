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
        path: "/allServices",
        loader: () => fetch("http://localhost:5000/allServices"),
        element: <AllService></AllService>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/addServices",
        element: <AddService></AddService>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
