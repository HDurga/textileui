import React from 'react';
import './categoriess.css';

const NavBar = () => (
  <div className="nav-bar">
    <a href="/">Home</a>
    <a href="products">Products</a>
    <div className="dropdown">
      <a href="#" className="dropbtn">Categories</a>
      <div className="dropdown-content">
        <a href="/categories/mens-wears">Mens Wears</a>
        <a href="/categories/womens-wears">Womens Wears</a>
        <a href="/categories/kids-wears">Kids Wears</a>
        <a href="/categories/bedsheets">Bedsheets</a>
        <a href="/categories/wholesale">Wholesale</a>
        <a href="/categories/blankets">Blankets</a>
      </div>
    </div>
  </div>
);

const Bedsheets = () => {
  const bedsheetProducts = [
    {
      id: 1,
      name: "Luxury Cotton King Size",
      image: require("../../img/luxury cottton king.jpg"),
      price: "$49.99",
      description: "100% Egyptian cotton king size bedsheet set",
      categories: ["King Size", "Cotton"],
      size: "108 x 108 inches"
    },
    {
      id: 2,
      name: "Floral Queen Set",
      image: require("../../img/floral queen.jpg"),
      price: "$39.99",
      description: "Elegant floral print queen size bedsheet",
      categories: ["Queen Size", "Printed"],
      size: "90 x 100 inches"
    },
    {
      id: 3,
      name: "Kids Theme Single",
      image: require("../../img/kids thems single.jpg"),
      price: "$29.99",
      description: "Cartoon character printed single bedsheet",
      categories: ["Single", "Kids"],
      size: "60 x 90 inches"
    },
    {
      id: 4,
      name: "Silk Blend Double",
      image: require("../../img/silk Blend Double.jpg"),
      price: "$69.99",
      description: "Luxury silk blend double bedsheet",
      categories: ["Double", "Silk"],
      size: "90 x 100 inches"
    },
    {
      id: 5,
      name: "Wedding Collection",
      image: require("../../img/wedding collection bedsheet.jpg"),
      price: "$89.99",
      description: "Premiume wedding collection bedsheet set",
      categories: ["Premium", "Wedding"],
      size: "108 x 108 inches"
    },
    {
      id: 6,
      name: "Geometric Print",
      image: require("../../img/geometric bedsheet.jpg"),
      price: "$45.99",
      description: "Modern geometric pattern bedsheet",
      categories: ["Modern", "Printed"],
      size: "90 x 100 inches"
    }
  ];

  return (
    <div className="bedsheets-container">
      <NavBar />
      
      <div className="bedsheets-hero">
        <h1>Luxury Bedsheets Collection</h1>
        <p>Experience comfort and style with our premium bedsheets</p>
      </div>

      <div className="products-grid">
        {bedsheetProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="size-badge">{product.size}</div>
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
                <button className="view-details">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bedsheets;