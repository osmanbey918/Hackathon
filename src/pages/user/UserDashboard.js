import React from 'react';
import OrderHistory from '../../components/menu/OrderHistory';
// import OrderHistory from '../components/menu/OrderHistory';

const UserDashboard = () => (
  <div className="user-dashboard">
    <h2>User Dashboard</h2>
    <OrderHistory />
    {/* Add user profile management, order tracker, etc. here */}
  </div>
);

export default UserDashboard;
