import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Notfound from "../Notfound/Notfound";
import Root from "./Root";
import Login from "./../Login/Login";
import Register from "./../Register/Register";
import AllService from "../AllService/AllService";

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
    ],
  },
]);
