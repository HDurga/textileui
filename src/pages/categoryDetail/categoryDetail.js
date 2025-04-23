import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './categoryDetail.css';

const CategoryDetail = ({ categoryData }) => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [categoryName]);

  // Find the category that matches the URL parameter
  const category = categoryData?.find(
    cat => cat.title.toLowerCase() === categoryName || 
           cat.title.toLowerCase().replace(/\s+/g, '-') === categoryName
  );

  if (loading) {
    return (
      <div className="category-detail-container loading">
        <div className="loader"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="category-detail-container error">
        <div className="error-content">
          <h2>Category Not Found</h2>
          <p>The requested category could not be found.</p>
          <button 
            className="primary-button"
            onClick={() => navigate('/categories')}
          >
            Return to Categories
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="category-detail-container">
      <nav className="breadcrumb">
        <span onClick={() => navigate('/')}>Home</span>
        <span className="separator">/</span>
        <span onClick={() => navigate('/categories')}>Categories</span>
        <span className="separator">/</span>
        <span className="current">{category.title}</span>
      </nav>

      <header className="category-header">
        <h1>{category.title}</h1>
        <p className="category-description">{category.description}</p>
      </header>

      <section className="category-content">
        <div className="category-image">
          <img src={category.image} alt={category.title} />
        </div>
        
        <div className="category-items">
          <h2>Available Items</h2>
          <div className="items-grid">
            {category.items.map((item, index) => (
              <div key={index} className="item-card">
                <h3>{item}</h3>
                <button 
                  className="view-details"
                  onClick={() => navigate(`/products/${item.toLowerCase()}`)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;