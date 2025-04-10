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

const KidsWears = () => {
  const kidsProducts = [
    {
      id: 1,
      name: "Party Frock",
      image: require("../../img/part frock.jpg"),
      price: "$35.99",
      description: "Beautiful party wear frock for girls",
      categories: ["Party Wear", "Girls"],
      age: "2-6 years"
    },
    {
      id: 2,
      name: "Boys T-Shirt Set",
      image: require("../../img/kids t-shirts.jpg"),
      price: "$25.99",
      description: "Comfortable cotton t-shirt and shorts set",
      categories: ["Casual Wear", "Boys"],
      age: "3-8 years"
    },
    {
      id: 3,
      name: "Kids Ethnic Wear",
      image: require("../../img/kids ethics wear.jpg"),
      price: "$45.99",
      description: "Traditional ethnic wear for festivals",
      categories: ["Festival Wear", "Ethnic"],
      age: "4-10 years"
    },
    {
      id: 4,
      name: "School Uniform",
      image: require("../../img/school unifrom.jpg"),
      price: "$29.99",
      description: "Complete school uniform set",
      categories: ["School Wear", "Uniform"],
      age: "5-15 years"
    },
    {
      id: 5,
      name: "Baby Romper",
      image: require("../../img/bady romper.jpg"),
      price: "$19.99",
      description: "Soft cotton romper for infants",
      categories: ["Baby Wear", "Casual"],
      age: "0-2 years"
    },
    {
      id: 6,
      name: "Winter Jacket",
      image: require("../../img/winter jacktes.jpg"),
      price: "$39.99",
      description: "Warm winter jacket for kids",
      categories: ["Winter Wear", "Seasonal"],
      age: "3-12 years"
    }
  ];

  return (
    <div className="kids-wears-container">
      <NavBar />
      
      <div className="kids-hero">
        <h1>Kids Collection</h1>
        <p>Adorable and comfortable clothing for your little ones</p>
      </div>

      <div className="products-grid">
        {kidsProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="age-tag">{product.age}</div>
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
                <button className="size-guide">Size Guide</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsWears;