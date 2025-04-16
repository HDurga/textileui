import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  require("../../img/back1.png"), // Corrected path
];

// Add the missing categoriesData definition
const categoriesData = [
  {
    title: "Fabrics",
    image: require("../../img/fabrics.jpg"),
    description: "Premium quality fabrics for all your needs",
    items: ["Cotton", "Silk", "Wool", "Synthetic", "Linen", "Denim, Georgette,chiffon,polyster,Nylon,Rayon"]
  },
  {
    title: "Laces",
    image: require("../../img/laces.jpg"),
    description: "Elegant laces for decorative and fashion purposes",
    items: ["Chantilly Lace", "Guipure Lace", "Venice Lace", "Cotton Lace", "Embroidered Lace"]
  },
  {
    title: "Sarees",
    image: require("../../img/sarees.jpg"),
    description: "Traditional and modern sarees for every occasion",
    items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees", "Banarasi Sarees", "Handloom Sarees"]
  },
  {
    title: "Carpets",
    image: require("../../img/carpets.jpg"),
    description: "Luxurious carpets and rugs for your home",
    items: ["Persian Carpets", "Modern Rugs", "Traditional Carpets", "Area Rugs", "Designer Carpets"]
  }
];

const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Move the scroll effect inside the NavBar component
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
        setIsScrolled(true);
      } else {
        document.body.classList.remove('scrolled');
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className="site-header">
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={require("../../img/logo.png")} alt="Company Logo" />
          </div>
          
          <div className="nav-links">
            <button onClick={() => navigate('/')} className="nav-link">Home</button>
            <button onClick={() => navigate('/products')} className="nav-link">Products</button>
            <div className="dropdown">
              <button 
                className="dropbtn" 
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Categories
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button 
                    onClick={() => navigate('/categories')} 
                    className="dropdown-item dropdown-header"
                  >
                    <span className="dropdown-icon">🏷️</span> All Categories
                    <span className="dropdown-description">View all textile categories</span>
                  </button>
                  <div className="dropdown-divider"></div>
                  <button onClick={() => navigate('/categories/fabrics')} className="dropdown-item">Fabrics</button>
                  <button onClick={() => navigate('/categories/laces')} className="dropdown-item">Laces</button>
                  <button onClick={() => navigate('/categories/sarees')} className="dropdown-item">Sarees</button>
                  <button onClick={() => navigate('/categories/carpets')} className="dropdown-item">Carpets</button>
                </div>
              )}
            </div>
          </div>
          
          {/* This will show when scrolling */}
          {isScrolled && (
            <div className="header-search-container">
              <div className="search-box">
                <input type="text" placeholder="Search for fabrics, materials, or designs..." />
                <button><i className="fas fa-search"></i> Search</button>
              </div>
            </div>
          )}
          
          <div className="nav-right">
            <div className="user-actions">
              <button className="sign-in">Sign In</button>
              <button className="sign-up">Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
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

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  
  return (
    <div className={`search-container ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="search-box">
        <input type="text" placeholder="Search for fabrics, materials, or designs..." />
        <button><i className="fas fa-search"></i> Search</button>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const textileTypes = [
    { 
      name: " Rajahmundry",
      description: "Famous handwoven cotton from Mangalagiri, known for its unique zari borders and durability",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: "Uppada ",
      description: "Delicate silk textile with intricate patterns, traditionally woven in Uppada",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: "pithapuram	", 
      description: "Rich silk sarees with traditional temple borders and motifs from Dharmavaram",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: "Tuni	", 
      description: "Fine cotton with gold border work, specialty of Venkatagiri weavers",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: " KaKinada", 
      description: "Famous for its unique tie-dye technique, creating vibrant patterns",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: "Mandapeta ", 
      description: "Traditional hand-painted or block-printed fabric with mythological themes",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: " Peddapalli	", 
      description: "Luxurious silk sarees with intricate gold and silver brocade work",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: "Peddaapuram	", 
      description: "Famous for its rich colors and heavy zari work, ideal for weddings",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name:  "Samallkot", 
      description: "Lightweight and breathable fabric, perfect for summer wear",
      image: require("../../img/cotton.jpg") // High-quality image
    },
    { 
      name: " Rajanagaram	", 
      description: "Soft and comfortable fabric, ideal for casual wear",
      image: require("../../img/cotton.jpg") // High-quality image
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
      image: require("../../img/temple  sarees.jpg") // High-quality image
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