import React from 'react';
import './categoriess.css';

const NavBar = () => (
  <div className="nav-bar">
    <a href="/">Home</a>
    <a href="products">Products</a>
    <a href="categories">All Categories</a>
  </div>
);

const Categories = () => {
  const categoryData = [
    {
      title: "mens wears",
      image: "/raw-materials.jpg",
      description: "High-quality textile raw materials for manufacturing",
      items: ["Cotton Fiber", "Wool", "Natural Silk", "Synthetic Fibers"]
    },
    {
      title: "womens wears",
      image: "/cotton-fabrics.jpg",
      description: "Premium cotton fabrics for various applications",
      items: ["Organic Cotton", "Printed Cotton", "Denim", "Canvas"]
    },
    {
      title: "kids wears",
      image: "/handloom.jpg",
      description: "Traditional handwoven fabrics by skilled artisans",
      items: ["Khadi", "Banarasi", "Chanderi", "Pochampally"]
    },
    {
      title: "bedsheets",
      image: "/silk-fabrics.jpg",
      description: "Luxurious silk fabrics for elegant wear",
      items: ["Mulberry Silk", "Tussar Silk", "Crepe Silk", "Raw Silk"]
    },
    {
      title: "Wholesale",
      image: "/wholesale.jpg",
      description: "Bulk quantities for business needs",
      items: ["Bulk Fabrics", "Business Supplies", "Wholesale Pricing"]
    },
    {
      title: "blankets",
      image: "/hand-printed.jpg",
      description: "Unique hand-printed textile designs",
      items: ["Block Print", "Batik", "Screen Print", "Kalamkari"]
    }
  ];

  return (
    <div className="categories-container">
      <NavBar />
      
      <div className="categories-hero">
        <h1>TYPES OF Fabrics</h1>
        <p>Explore our wide range of textile products</p>
      </div>

      <div className="categories-grid">
        {categoryData.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-image">
              <img src={category.image} alt={category.title} />
            </div>
            <div className="category-content">
              <h2>{category.title}</h2>
              <p>{category.description}</p>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="explore-btn" onClick={() => window.location.href = `/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                Explore {category.title}
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2025 Textile Categories</p>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/about">About</a>
        </div>
      </footer>
    </div>
  );
};

export default Categories;