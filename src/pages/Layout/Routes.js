import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Notfound from "../Notfound/Notfound";
import Root from "./Root";

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
    ],
  },
]);
