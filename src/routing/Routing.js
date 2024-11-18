import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import PublicRoute from "./PublicRoute";
import ContactUs from "../pages/contectus/ContactUs";
import MenuPage from "../pages/menu/MenuPage";
import About from "../pages/about/About";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: "/",
    element: <PublicRoute><Signup /></PublicRoute>
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: "/ContectUs",
    element: <PrivateRoute><ContactUs /></PrivateRoute>
  },
  {
    path: "/menupage",
    element: <PrivateRoute><MenuPage /></PrivateRoute>
  },
  {
    path: "/about",
    element: <PrivateRoute><About /></PrivateRoute>
  },
]);

export default function Routing(params) {
  return (
    <RouterProvider router={router} />
  )
}