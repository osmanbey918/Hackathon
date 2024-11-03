import React from 'react';
import './About.css';
import Navbar from '../../components/navbar/Navbar';

const About = () => {
  return (
    <div className='abo'>
      <div className="about-container">
        <h1>About Us</h1>
        <p className="about-description">
          Welcome to <strong>Dubai Restaurant</strong>! We are dedicated to serving you the best food with the freshest ingredients. Our mission is to provide a memorable dining experience that combines excellent service, delicious meals, and a warm atmosphere.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          To create an unforgettable dining experience that leaves a lasting impression and keeps our customers coming back for more.
        </p>
        
        <h2>Our Vision</h2>
        <p>
          To be recognized as the leading restaurant in the area, known for our exceptional service and quality food.
        </p>
        
        <h2>Meet Our Team</h2>
        <div className="team-container">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <img src={member.image} alt={member.name} className="team-image" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
        
        <h2>Customer Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.quote}"</p>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </div>
        
        <h2>Gallery</h2>
        <div className="gallery-container">
          {galleryImages.map((image, index) => (
            <img src={image} alt={`Gallery ${index}`} className="gallery-image" key={index} />
          ))}
        </div>
        
        <h2>Contact Us</h2>
        <p>Email: contact@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
        
        <h2>Follow Us</h2>
        <div className="social-media-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        
        <h2>Location</h2>
        <div className="map-container">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097587!2d144.9537363153161!3d-37.81627997975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f1b5ab5%3A0x9e5c1a8fda5bfc09!2sRestaurant!5e0!3m2!1sen!2sau!4v1614110800417!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Head Chef',
    image: 'path/to/chef-image.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Manager',
    image: 'path/to/manager-image.jpg', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Emily Johnson',
    position: 'Sous Chef',
    image: 'path/to/sous-chef-image.jpg', // Replace with actual image path
  },
];

const testimonials = [
  {
    name: 'Alice',
    quote: 'The best dining experience I’ve ever had!',
  },
  {
    name: 'Bob',
    quote: 'Incredible food and atmosphere. Highly recommended!',
  },
  {
    name: 'Charlie',
    quote: 'I love the variety on the menu and the friendly staff.',
  },
];

const galleryImages = [
  'path/to/gallery-image1.jpg', // Replace with actual image paths
  'path/to/gallery-image2.jpg',
  'path/to/gallery-image3.jpg',
  'path/to/gallery-image4.jpg',
];

export default About;
