import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './categoryDetail.css';

const CategoryDetail = ({ categoryData }) => {
  const { categoryName } = useParams(); 
  const navigate = useNavigate();
  
  // Always redirect to the main categories page regardless of the category
  useEffect(() => {
    // Redirect to the main categories page
    navigate('/categories');
  }, [navigate]);
  
  // The rest of the component won't render due to the redirect,
  // but we'll keep it for completeness
  
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
      </div>
      
      {/* Rest of the component */}
    </div>
  );
};

export default CategoryDetail;