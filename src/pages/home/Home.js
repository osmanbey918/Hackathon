// Home.js
import React from 'react';
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
      <MenuPage />
      <div className='abou'>
        <About /></div>
      <ContactUs />
    </div>
  );
}
