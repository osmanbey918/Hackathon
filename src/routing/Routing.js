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
    path: "/",
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: "/signup",
    element: <PublicRoute><Signup /></PublicRoute>
  },
  {
    path: "/login",
    element: <PublicRoute><Login /></PublicRoute>
  },
  {
    path: "/ContectUs",
    element: <PublicRoute><ContactUs /></PublicRoute>
  },
  {
    path: "/menupage",
    element: <PublicRoute><MenuPage /></PublicRoute>
  },
  {
    path: "/about",
    element: <PublicRoute><About/></PublicRoute>
  },
]);

export default function Routing(params) {
  return (
    <RouterProvider router={router} />
  )
}