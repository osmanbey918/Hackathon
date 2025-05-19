// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getCurrentUser } from '../../store/slices/authSlice';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUser());
    }
  }, [user, dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className='nav-overlay'>
        <div className="navbar-brand">
          <Link to="/" className="navbar-title">Dubai Restaurant</Link>
        </div>
        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
