import React from 'react';
import { Link } from 'react-router-dom';

const WelCome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-overlay">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to Dubai Restaurant</h1>
          <p className="welcome-text">
            Discover our exquisite menu and enjoy the finest culinary experience in town.
          </p>
          <div className="welcome-buttons">
            <Link to="/menu" className="welcome-button">
              View Menu
            </Link>
            <Link to="/reserve" className="welcome-button">
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelCome;
