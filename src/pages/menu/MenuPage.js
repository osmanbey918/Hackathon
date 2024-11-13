// MenuPage.js
import React, { useEffect, useState } from 'react';
import './MenuPage.css';
import Navbar from '../../components/navbar/Navbar';
import WelCome from '../../components/welcome/WelCome';
import hotelImage from '../../assets/OIP.jpeg';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, fetchProductData } from '../../store/slices/productSlice';
import store from '../../store/store';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { products } = useSelector((state) => state.product)
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'Margherita Pizza',
      price: '$12.99',
      image: '',
      category: 'Pizza',
    },
    {
      id: 2,
      title: 'Caesar Salad',
      price: '$8.99',
      image: 'https://via.placeholder.com/150',
      category: 'Salads',
    },
    {
      id: 3,
      title: 'Grilled Salmon',
      price: '$15.99',
      image: 'https://via.placeholder.com/150',
      category: 'Seafood',
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      price: '$6.99',
      image: 'https://via.placeholder.com/150',
      category: 'Desserts',
    },
  ]);
  const dispatch = useDispatch();

  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ title: '', price: '' });

  // Categories derived from menu items
  const categories = ['All', ...new Set(menuItems.map(item => item.category))];

  // Filter menu items based on search term and selected category
  const filteredMenuItems = menuItems.filter(item =>
    (selectedCategory === 'All' || item.category === selectedCategory) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedItem = {
      id: editItem.id,
      title: event.target.title.value,
      price: event.target.price.value,
      image: editItem.image, // You can implement an image update feature
      category: editItem.category,
    };

    const updatedMenuItems = menuItems.map(item =>
      item.id === editItem.id ? updatedItem : item
    );

    setMenuItems(updatedMenuItems);
    setEditItem(null);
  };
  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const handleAddItem = async (event) => {
    event.preventDefault();
    const newMenuItem = {
      // id: menuItems.length + 1, // Simple ID generation
      title: newItem.title,
      price: newItem.price,
      // image: newItem.image || 'https://via.placeholder.com/150', // Default image
      // category: newItem.category,
    };
    setMenuItems([...menuItems, newMenuItem]);
    await dispatch(addProductData({
      title: newItem.title,
      price: newItem.price,
    }))
    console.log([newMenuItem]);
    // console.log(data);

    setNewItem({ title: '', price: '', image: '', category: '' }); // Reset new item input
  };

  return (
    <div className='bgg'>
      <div className='wel-bg'>
        <Navbar />
        <WelCome />
      </div>
    
      <div className="menu-container">
        <h2>Menu</h2>
        {/* <input
          type="text"
          placeholder="Search for dishes..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        /> */}

        {/* <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select> */}

        {/* {editItem && (
          <form onSubmit={handleUpdate} className="update-form">
            <input
              type="text"
              name="title"
              defaultValue={editItem.title}
              placeholder="Dish Title"
              required
            />
            <input
              type="text"
              name="price"
              defaultValue={editItem.price}
              placeholder="Dish Price"
              required
            />
            <button type="submit">Update Item</button>
          </form>
        )} */}

        <form onSubmit={handleAddItem} className="add-item-form">
          <input
            type="text"
            placeholder="New Dish Title"
            value={newItem.title}
            onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="New Dish Price"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
            required
          />
          {/* <input
            type="text"
            placeholder="Image URL (optional)"
            value={newItem.image}
            onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
          /> */}
          {/* <input
            type="text"
            placeholder="Category"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            required
          /> */}
          <button type="submit">Add New Item</button>
        </form>


        {/* {selectedCategory !== 'All' && (
          <h3 className="category-heading">{selectedCategory}</h3>
        )} */}

        {/* <div className="menu-grid">
          {filteredMenuItems.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className='card'>
                <div className='img-card'>
                  <img src={hotelImage} alt={item.title} className="menu-image" />
                </div>
                <div className='card-details'>
                  <h3 className="menu-title">{item.title}</h3>
                  <p className="menu-price">{item.price}</p>
                  <button className="order-button">Order Now</button>
                </div>
              </div>
              
              </div>
              ))}
              <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
        </div> */}











<div className='menu-grid'>
        {products.length > 0 ? (
          products.map((product) => (
            <div className='menu-card' key={product.id}>
              <div className='card'>
                <div className='img-card'>
                  <img src={hotelImage} alt='here is my image' className="menu-image" />
                </div>
                <div className='card-details'>
                  <h3 className='menu-title'>{product.title}</h3>
                  <div className='menu-price'>{product.price}</div>
                  <button className="order-button">Order Now</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default MenuPage;
