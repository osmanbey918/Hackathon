import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const products = useSelector(state => state.product.products);
  const orders = useSelector(state => state.orders.orders);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <section>
        <h3>Menu Items</h3>
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.title} - ${product.price}</li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Orders</h3>
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              Order #{order.id} - {order.status} - {new Date(order.createdAt).toLocaleString()}
            </li>
          ))}
        </ul>
      </section>
      {/* Add reports, analytics, etc. here */}
    </div>
  );
};

export default AdminDashboard;
