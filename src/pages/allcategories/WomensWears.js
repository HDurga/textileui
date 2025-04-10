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
          <a href="/categories/womens-wears">Womens Wears</a>
          <div className="submenu-content">
            <a href="/categories/womens-wears/dresses">Dresses</a>
            <a href="/categories/womens-wears/sarees">Sarees</a>
            <a href="/categories/womens-wears/kurtis">Kurtis</a>
            <a href="/categories/womens-wears/gowns">Gowns</a>
            <a href="/categories/womens-wears/palazzo">Palazzo Sets</a>
            <a href="/categories/womens-wears/lehenga">Lehenga Choli</a>
          </div>
        </div>
        <a href="/categories/mens-wears">Mens Wears</a>
        <a href="/categories/kids-wears">Kids Wears</a>
        <a href="/categories/bedsheets">Bedsheets</a>
        <a href="/categories/wholesale">Wholesale</a>
        <a href="/categories/blankets">Blankets</a>
      </div>
    </div>
  </div>
);

const WomensWears = () => {
  const womensProducts = [
    {
      id: 1,
      name: "Floral Maxi Dress",
      image: require('../../img/floarl max dress.jpg'),
      price: "$79.99",
      description: "Elegant floral print maxi dress",
      categories: ["Dresses", "Casual"]
    },
    {
      id: 2,
      name: "Designer Saree",
      image: require('../../img/deginer sarees.jpg'),
      price: "$149.99",
      description: "Traditional silk designer saree",
      categories: ["Ethnic", "Formal"]
    },
    {
      id: 3,
      name: "Cotton Kurti",
      image: require('../../img/cotton kurti.jpg'),
      price: "$39.99",
      description: "Comfortable daily wear kurti",
      categories: ["Ethnic", "Casual"]
    },
    {
      id: 4,
      name: "Party Wear Gown",
      image: require('../../img/part wear gown.jpg'),
      price: "$199.99",
      description: "Elegant evening gown",
      categories: ["Party Wear", "Formal"]
    },
    {
      id: 5,
      name: "Palazzo Set",
      image: require('../../img/palozza sets.jpg'),
      price: "$69.99",
      description: "Stylish palazzo with kurta set",
      categories: ["Ethnic", "Daily Wear"]
    },
    {
      id: 6,
      name: "Lehenga Choli",
      image: require('../../img/lehega sets.jpg'),
      price: "$299.99",
      description: "Traditional embroidered lehenga",
      categories: ["Ethnic", "Festival Wear"]
    }
  ];

  return (
    <div className="womens-wears-container">
      <NavBar />
      
      <div className="womens-hero">
        <h1>Women's Collection</h1>
        <p>Explore our elegant collection of women's wear</p>
      </div>

      <div className="products-grid">
        {womensProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <button className="quick-view">Quick View</button>
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
                <button className="add-to-wishlist">♡</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomensWears;