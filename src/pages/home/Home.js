// Home.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Navbar from '../../components/navbar/Navbar';
import MenuPage from '../menu/MenuPage';
import About from '../about/About';
import ContactUs from '../contectus/ContactUs';
import WelCome from '../../components/welcome/WelCome';


export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}
