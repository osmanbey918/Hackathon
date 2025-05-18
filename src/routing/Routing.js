import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// Lazy load heavy pages
const Home = lazy(() => import("../pages/home/Home"));
const Signup = lazy(() => import("../pages/signup/SignUp"));
const Login = lazy(() => import("../pages/login/Login"));
const ContactUs = lazy(() => import("../pages/contectus/ContactUs"));
const MenuPage = lazy(() => import("../pages/menu/MenuPage"));
const About = lazy(() => import("../pages/about/About"));
const UserDashboard = lazy(() => import("../pages/user/UserDashboard"));
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PublicRoute><Signup /></PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PublicRoute><Login /></PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute><Home /></PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/menu",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute><MenuPage /></PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute><About /></PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute><ContactUs /></PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/user",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute role="user"><UserDashboard /></PrivateRoute>
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>
      </Suspense>
    ),
  },
]);

export default function Routing() {
  return <RouterProvider router={router} />;
}