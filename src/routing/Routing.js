import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Signup from '../pages/signup/SignUp';
import Login from '../pages/login/Login';
import ContactUs from '../pages/contectus/ContactUs';
import MenuPage from '../pages/menu/MenuPage';
import About from '../pages/about/About';
import UserDashboard from '../pages/user/UserDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
