import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const orders = useSelector(state => state.orders.orders);

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <div>Order #{order.id} - {order.status} - {new Date(order.createdAt).toLocaleString()}</div>
              <ul>
                {order.items.map(({ product, quantity }) => (
                  <li key={product.id}>{product.title} x {quantity}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
