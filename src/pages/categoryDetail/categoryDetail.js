import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './categoryDetail.css';

const CategoryDetail = ({ categoryData }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  
  // Find the category that matches the URL parameter
  const category = categoryData.find(
    cat => cat.title.toLowerCase() === categoryName || 
           cat.title.toLowerCase().replace(/\s+/g, '-') === categoryName
  );
  
  // If category not found, show error or redirect
  if (!category) {
    return (
      <div className="category-not-found">
        <h2>Category not found</h2>
        <button onClick={() => navigate('/categories')}>Back to Categories</button>
      </div>
    );
  }

  return (
    <div className="category-detail-container">
      <div className="nav-bar">
        <button onClick={() => navigate('/')} className="nav-link">Home</button>
        <button onClick={() => navigate('/categories')} className="nav-link">All Categories</button>
        <button onClick={() => navigate('/products')} className="nav-link">Products</button>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
            <button onClick={() => navigate('/categories/fabrics')} className="dropdown-item">Fabrics</button>
            <button onClick={() => navigate('/categories/laces')} className="dropdown-item">Laces</button>
            <button onClick={() => navigate('/categories/sarees')} className="dropdown-item">Sarees</button>
            <button onClick={() => navigate('/categories/carpets')} className="dropdown-item">Carpets</button>
          </div>
        </div>
      </div>
      
      <div className="category-detail-hero">
        <img src={category.image} alt={category.title} className="category-banner-image" />
        <div className="category-detail-overlay">
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </div>
      
      <div className="category-items-section">
        <h2>Available {category.title}</h2>
        <div className="category-items-grid">
          {category.items.map((item, index) => (
            <div className="item-card" key={index}>
              <h3>{item}</h3>
              <button className="view-details-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2023 Textile UI</p>
        <div className="footer-links">
          <button onClick={() => navigate('/contact')} className="footer-link">Contact Us</button>
          <button onClick={() => navigate('/about')} className="footer-link">About</button>
        </div>
      </footer>
    </div>
  );
};

export default CategoryDetail;