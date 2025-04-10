import React, { useEffect, useState } from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  require("../../img/back1.png"), // Corrected path
];

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const categories = [
    "womens wears",
    "mens wears",
    "kids wears",
    "bedsheets",
    "blankets",
  ];

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="Company Logo" /> {/* Corrected path */}
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
    <h1>LYCORIS ADS& SOFTWARE SOLUTION PVT LTD</h1>
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
      name: " Rajahmundry",
      description: "Famous handwoven cotton from Mangalagiri, known for its unique zari borders and durability",
      image: require("../../img/uppada.jpg") // High-quality image
    },
    { 
      name: "Uppada ",
      description: "Delicate silk textile with intricate patterns, traditionally woven in Uppada",
      image: require("../../img/uppada jam.jpg") // High-quality image
    },
    { 
      name: "pithapuram	", 
      description: "Rich silk sarees with traditional temple borders and motifs from Dharmavaram",
      image: require("../../img/Plain Cotton Sarees.jpeg") // High-quality image
    },
    { 
      name: "Tuni	", 
      description: "Fine cotton with gold border work, specialty of Venkatagiri weavers",
      image: require("../../img/cottonsilk.jpg") // High-quality image
    },
    { 
      name: " KaKinada", 
      description: "Famous for its unique tie-dye technique, creating vibrant patterns",
      image: require("../../img/powerloomcotton.jpg") // High-quality image
    },
    { 
      name: "Mandapeta ", 
      description: "Traditional hand-painted or block-printed fabric with mythological themes",
      image: require("../../img/Khadi cotton.jpg") // High-quality image
    },
    { 
      name: " Peddapalli	", 
      description: "Luxurious silk sarees with intricate gold and silver brocade work",
      image: require("../../img/printed cotton fabrics.jpg") // High-quality image
    },
    { 
      name: "Peddaapuram	", 
      description: "Famous for its rich colors and heavy zari work, ideal for weddings",
      image: require("../../img/cotton shirts fabric's.jpg") // High-quality image
    },
    { 
      name:  "Samallkot", 
      description: "Lightweight and breathable fabric, perfect for summer wear",
      image: require("../../img/cotton dress material.jpg") // High-quality image
    },
    { 
      name: " Rajanagaram	", 
      description: "Soft and comfortable fabric, ideal for casual wear",
      image: require("../../img/handloom.jpg") // High-quality image
    },
    
  ];

  return (
    <section className="featured-section">
      <h2>All Types of Fabrics</h2>
      <div className="big-icon-grid">
        {textileTypes.map((textile, index) => (
          <div className="big-icon-card" key={index}>
            <img src={textile.image} alt={textile.name} className="big-icon-image" />
            <div className="big-icon-info">
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
      image: require("../../img/handloomsarees p.jpg") // High-quality image
    },
    { 
      name: "Ikat Traditions", 
      description: "Distinctive tie-dye weaving patterns unique to Andhra",
      image: require('../../img/ikat sarees.jpg') // High-quality image
    },
    { 
      name: "Temple Designs", 
      description: "Traditional motifs inspired by temple architecture",
      image: require("../../img/temple desgin sarees.jpg") // High-quality image
    },
    { 
      name: "Modern Innovations", 
      description: "Contemporary adaptations of traditional techniques",
      image: require("../../img/modern.jpg") // High-quality image
    }
  ];

  return (
    <section className="categories-section">
      <h2>Types of Sarees</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-tile" key={index}>
            <img src={category.image} alt={`Image of ${category.name}`} className="category-image" />
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
        <h2>Crafting Excellence in Textiles</h2> {/* Fixed typo */}
        <p>With over 25 years of expertise in textile manufacturing and trading, we bring you the finest quality fabrics from across India.</p>
        <button className="learn-more">Learn More</button>
      </div>
    </section>
  </div>
);

export default Home;