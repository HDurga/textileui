import React, { useState } from 'react';
import './categoriess.css';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="Company Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <div className="dropdown">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }}>
            All Categories
          </a>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="/categories/womens-wears">Womens Wears</a>
              <a href="/categories/mens-wears">Mens Wears</a>
              <a href="/categories/kids-wears">Kids Wears</a>
              <a href="/categories/bedsheets">Bedsheets</a>
              <a href="/categories/blankets">Blankets</a>
              <a href="/categories/handlooms">Handlooms</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Blankets = () => {
  const blanketProducts = [
    {
      id: 1,
      name: "Wool Winter Blanket",
      image: require("../../img/wool winter blankets.jpg"),
      price: "$79.99",
      description: "Premium wool blanket for winter comfort",
      categories: ["Winter", "Wool"],
      size: "Double (90 x 90 inches)"
    },
    {
      id: 2,
      name: "Cotton Summer Throw",
      image: require("../../img/cotton summer Throw.jpg"),
      price: "$45.99",
      description: "Lightweight cotton blanket for summer",
      categories: ["Summer", "Cotton"],
      size: "Single (60 x 90 inches)"
    },
    {
      id: 3,
      name: "Luxury Mink Blanket",
      image: require("../../img/luxury Mink blanket.jpg"),
      price: "$129.99",
      description: "Premium mink blanket for ultimate comfort",
      categories: ["Luxury", "Mink"],
      size: "King (108 x 90 inches)"
    },
    {
      id: 4,
      name: "Travel Blanket",
      image: require("../../img/travel blanket.jpg"),
      price: "$34.99",
      description: "Compact and portable travel blanket",
      categories: ["Travel", "Lightweight"],
      size: "Travel (40 x 60 inches)"
    }
  ];

  return (
    <div className="blankets-container">
      <NavBar />
      
      <div className="blankets-hero">
        <h1>Cozy Blanket Collection</h1>
        <p>Wrap yourself in comfort and warmth</p>
      </div>

      <div className="products-grid">
        {blanketProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="blanket-size">{product.size}</div>
              <div className="comfort-rating">
                <span>★★★★★</span>
              </div>
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="description">{product.description}</p>
              <div className="categories-tags">
                {product.categories.map((category, index) => (
                  <span key={index} className="category-tag">{category}</span>
                ))}
              </div>
              <div className="product-actions">
                <button className="add-to-cart">Add to Cart</button>
                <button className="comfort-guide">Comfort Guide</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blankets;