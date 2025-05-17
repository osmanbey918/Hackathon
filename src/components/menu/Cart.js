import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../store/slices/cartSlice';
import { placeOrder } from '../../store/slices/orderSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (items.length > 0) {
      dispatch(placeOrder({ items }));
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map(({ product, quantity }) => (
              <li key={product.id}>
                {product.title} - ${product.price} x
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={e => dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))}
                  style={{ width: 40, margin: '0 8px' }}
                />
                <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleOrder}>Place Order</button>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
