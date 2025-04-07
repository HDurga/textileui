import React, { useEffect, useState } from "react";
import "./home.css";

const images = [
  require("../../img/back1.png"),
];

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // hiiii

  const categories = [
    "Raw Materials",
    "Cotton Fabrics",
    "Pure Handloom Fabrics",
    "Silk Fabrics",
    "Wholesale",
    "Hand Printed"
  ];

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="Company Logo" />
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="products">Products</a>
        <div className="dropdown">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }}>
            All Categories
          </a>
          {showDropdown && (
            <div className="dropdown-content">
              {categories.map((category, index) => (
                <a key={index} href={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                  {category}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={i === index ? "active" : ""}
        />
      ))}
    </div>
  );
};

const SearchBar = () => (
  <div className="search-container">
    <h1>Discover Premium Textiles</h1>
    <p>Explore our collection of finest fabrics and materials</p>
    <div className="search-box">
      <input type="text" placeholder="Search for fabrics, materials, or designs..." />
      <button><i className="fas fa-search"></i> Search</button>
    </div>
  </div>
);

const FeaturedProducts = () => {
  const textileTypes = [
    { 
      name: "Mangalagiri Cotton", 
      description: "Famous handwoven cotton from Mangalagiri, known for its unique zari borders and durability",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Uppada Jamdani", 
      description: "Delicate silk textile with intricate patterns, traditionally woven in Uppada",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Dharmavaram Silk", 
      description: "Rich silk sarees with traditional temple borders and motifs from Dharmavaram",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Venkatagiri Cotton", 
      description: "Fine cotton with gold border work, specialty of Venkatagiri weavers",
      image: require("../../img/slik.jpeg")
    }
  ];

  return (
    <section className="featured-section">
      <h2>Traditional Textiles of Andhra Pradesh</h2>
      <div className="products-slider">
        {textileTypes.map((textile, index) => (
          <div className="product-card" key={index}>
            <img src={textile.image} alt={textile.name} />
            <div className="product-info">
              <h3>{textile.name}</h3>
              <p>{textile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { 
      name: "Handloom Heritage", 
      description: "Ancient weaving techniques preserved through generations",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Ikat Traditions", 
      description: "Distinctive tie-dye weaving patterns unique to Andhra",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Temple Designs", 
      description: "Traditional motifs inspired by temple architecture",
      image: require("../../img/slik.jpeg")
    },
    { 
      name: "Modern Innovations", 
      description: "Contemporary adaptations of traditional techniques",
      image: require("../../img/slik.jpeg")
    }
  ];

  return (
    <section className="categories-section">
      <h2>Textile Traditions</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-tile" key={index}>
            <img src={category.image} alt={category.name} />
            <div className="category-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => (
  <div className="home-container">
    <NavBar />
    <Slideshow />
    <SearchBar />
    <FeaturedProducts />
    <Categories />
    <section className="about-section">
      <div className="about-content">
        <h2>Crafting Excellence in Textiles</h2>
        <p>With over 25 years of expertise in textile manufacturing and trading, we bring you the finest quality fabrics from across India.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  </div>
);

export default Home;
