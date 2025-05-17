import React from 'react';

const MenuItemCard = ({ product, onOrder }) => (
  <div className='menu-card' key={product.id}>
    <div className='card'>
      <div className='img-card'>
        <img src={product.img || 'placeholder-image-url'} alt='Product' className="menu-image" />
      </div>
      <div className='card-details'>
        <h3 className='menu-title'>{product.title}</h3>
        <div className='menu-price'>{product.price}$</div>
        <button className="order-button" onClick={() => onOrder(product)}>Order Now</button>
      </div>
    </div>
  </div>
);

export default React.memo(MenuItemCard);
