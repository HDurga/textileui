import React from 'react';
import './categoriess.css';

const NavBar = () => (
  <div className="nav-bar">
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <div className="dropdown">
      <a href="/categories/all categories/categories" className="dropbtn">Categories</a>
      <div className="dropdown-content">
        <div className="dropdown-submenu">
          <a href="/categories/mens-wears/categories">Mens Wears</a>
          <div className="submenu-content">
            <a href="/categories/mens-wears/formal">Formal Shirts</a>
            <a href="/categories/mens-wears/casual">Casual T-Shirts</a>
            <a href="/categories/mens-wears/jeans">Denim Jeans</a>
            <a href="/categories/mens-wears/suits">Business Suits</a>
            <a href="/categories/mens-wears/sports">Sports Wear</a>
            <a href="/categories/mens-wears/polo">Polo Shirts</a>
          </div>
        </div>
        <a href="/categories/womens-wears">Womens Wears</a>
        <a href="/categories/kids-wears">Kids Wears</a>
        <a href="/categories/bedsheets">Bedsheets</a>
        <a href="/categories/wholesale">Wholesale</a>
        <a href="/categories/blankets">Blankets</a>
      </div>
    </div>
  </div>
);

const MensWears = () => {
  const mensProducts = [
    {
      id: 1,
      name: "Formal Shirt",
      image: require("../../img/formal shirt.jpg"),
      price: "$45.99",
      description: "Classic cotton formal shirt",
      categories: ["Formal", "Office Wear"]
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      image: require("../../img/casual T-shirt.jpg"),
      price: "$25.99",
      description: "Comfortable cotton t-shirt",
      categories: ["Casual", "Daily Wear"]
    },
    {
      id: 3,
      name: "Denim Jeans",
      image: require("../../img/Denim jeans.png"),
      price: "$59.99",
      description: "Classic blue denim jeans",
      categories: ["Casual", "Daily Wear"]
    },
    {
      id: 4,
      name: "Business Suit",
      image: require("../../img/Buniess scuits.jpg"),
      price: "$299.99",
      description: "Premium business suit",
      categories: ["Formal", "Business"]
    },
    {
      id: 5,
      name: "Sports Jacket",
      image: require("../../img/sports  jackets.jpg"),
      price: "$79.99",
      description: "Lightweight sports jacket",
      categories: ["Sports", "Casual"]
    },
    {
      id: 6,
      name: "Polo Shirt",
      image: require("../../img/polo shirts.jpg"),
      price: "$35.99",
      description: "Classic polo shirt",
      categories: ["Casual", "Semi-formal"]
    }
  ];

  return (
    <div className="mens-wears-container">
      <NavBar />
      
      <div className="mens-hero">
        <h1>Men's Collection</h1>
        <p>Discover our premium collection of men's wear</p>
      </div>

      <div className="products-grid-square">
        {mensProducts.map((product) => (
          <div className="product-card-square" key={product.id}>
            <div className="product-image-square">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <div className="product-quick-view">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </div>
            </div>
            <div className="product-details-square">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="description">{product.description}</p>
              <div className="categories-tags">
                {product.categories.map((category, index) => (
                  <span key={index} className="category-tag">{category}</span>
                ))}
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MensWears;