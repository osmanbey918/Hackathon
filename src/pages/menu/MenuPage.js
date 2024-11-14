import React, { useEffect, useState } from 'react';
import './MenuPage.css';
import Navbar from '../../components/navbar/Navbar';
import WelCome from '../../components/welcome/WelCome';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, fetchProductData, uploadImage } from '../../store/slices/productSlice';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { products } = useSelector((state) => state.product);
  const { imageUrl } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const [editItem, setEditItem] = useState(null);
  const [newItem, setNewItem] = useState({ title: '', price: '', category: '', img: null });

  // Categories derived from menu items
  const categories = ['All', ...new Set(products.map((item) => item.category))];

  // Filter menu items based on search term and selected category
  const filteredProducts = products.filter(
    (item) =>
      (selectedCategory === 'All' || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(products.map((item) => item.category));
  console.log(categories);

  // const handleDelete = (id) => {
  //   setproducts(products.filter(item => item.id !== id));
  // };

  // const handleEdit = (item) => {
  //   setEditItem(item);
  // };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedItem = {
      id: editItem.id,
      title: event.target.title.value,
      price: event.target.price.value,
      image: editItem.image, // You can implement an image update feature
      category: editItem.category,
    };

    // const updatedMenuItems = menuItems.map(item =>
    //   item.id === editItem.id ? updatedItem : item
    // );

    // setMenuItems(updatedMenuItems);
    setEditItem(null);
  };

  // Handle adding a new item
  const handleAddItem = async (event) => {
    event.preventDefault();
  
    // Check if an image is selected
    if (newItem.img) {
      try {
        // Upload image first and get the URL
         dispatch(uploadImage(newItem.img));
        console.log(imageUrl);
        
        // Add the product after getting the image URL
        await dispatch(addProductData({
          title: newItem.title,
          price: newItem.price,
          category: newItem.category,
          img: imageUrl, // Use the URL returned from Firebase
        }));
      } catch (error) {
        console.error("Error adding product:", error);
      }
    } else {
      // If no image is selected, add product without image (use placeholder or empty string)
      await dispatch(addProductData({
        title: newItem.title,
        price: newItem.price,
        category: newItem.category,
        img: '', // Or a placeholder image URL if you prefer
      }));
    }
  
    // Reset the form
    setNewItem({ title: '', price: '', category: '', img: null });
  };

  return (
    <div className='bgg'>
      <div className='wel-bg'>
        <Navbar />
        <WelCome />
      </div>

      <div className="menu-container">
        <h2>Menu</h2>
        <input
          type="text"
          placeholder="Search for dishes..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category dropdown */}
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        {selectedCategory !== 'All' && (
          <h3 className="category-heading">{selectedCategory}</h3>
        )}

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
          <input
            type="file"
            onChange={(e) => setNewItem({ ...newItem, img: e.target.files[0] })}
          />
          <input
            type="text"
            placeholder="Category"
            value={newItem.category}
            onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            required
          />
          <button type="submit">Add New Item</button>
        </form>

        <div className='menu-grid'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className='menu-card' key={product.id}>
                <div className='card'>
                  <div className='img-card'>
                    <img src={product.img || 'placeholder-image-url'} alt='Product' className="menu-image" />
                  </div>
                    {console.log(product.img)}
                  <div className='card-details'>
                    <h3 className='menu-title'>{product.title}</h3>
                    <div className='menu-price'>{product.price}$</div>
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
