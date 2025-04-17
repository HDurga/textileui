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
      <nav className="nav-barhome">
        <div className="nav-container">
          {/* Logo on the left */}
          <div className="logo" onClick={() => navigate('/')} style={{ marginRight: 'auto', order: '1' }}>
            <img 
              src={require("../../img/logo.png")} 
              alt="Company Logo" 
              style={{
                height: '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </div>
          
          {/* Search bar appears on the left side when scrolled */}
          {isScrolled && (
            <div className="header-search-container" style={{ order: '2' }}>
              <div className="search-box">
                <input type="text" placeholder="Search for fabrics, materials, or designs..." />
                <button><i className="fas fa-search"></i> Search</button>
              </div>
            </div>
          )}
          
          <div className="nav-links" style={{ order: isScrolled ? '3' : '2' }}>
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
                    <span className="dropdown-icon"></span> All Categories
                    <span className="dropdown-description">View all textile categories</span>
                  </button>
                  <div className="dropdown-divider"></div>
                  <button onClick={() => navigate('/categories')} className="dropdown-item">Fabrics</button>
                  <button onClick={() => navigate('/categories')} className="dropdown-item">Laces</button>
                  <button onClick={() => navigate('/categories')} className="dropdown-item">Sarees</button>
                  <button onClick={() => navigate('/categories')} className="dropdown-item">Carpets</button>
                </div>
              )}
            </div>
          </div>
          
          {/* Sign in/up buttons on the right */}
          <div className="user-actions" style={{ marginLeft: 'auto', order: '4' }}>
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
          
          {/* Add transparent logo to the right side */}
          <div className="right-logo" style={{ order: '5' }}>
            <img 
              src={require("../../img/logo.png")} 
              alt="Logo" 
              style={{ 
                height: '45px',
                width: 'auto',
                marginLeft: '15px',
                background: 'transparent'
              }}
            />
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
  return (
    <div className="search-container">
      <div className="search-box">
        <input type="text" placeholder="Search for fabrics, materials, or designs..." />
        <button><i className="fas fa-search"></i> Search</button>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  // Settings for the slider with improved scrolling
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  // Keep your existing textileTypes array
  
  return (
    <section className="featured-section">
      <h2>Types of fabrics</h2>
      <Slider {...settings} className="circle-icon-slider">
        {textileTypes.map((textile, index) => (
          <div className="circle-icon-card" key={index}>
            <div className="circle-icon-container">
              <img src={textile.image} alt={textile.name} className="circle-icon-image" />
            </div>
            <div className="circle-icon-info">
              <h3>{textile.name}</h3>
              <p>{textile.description}</p>
            </div>
          </div>
        ))}
      </Slider>
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