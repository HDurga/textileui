import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../../img/logo.png';
import backgroundVideo from '../../img/fabricsvedio.mp4';

const images = [
  require("../../img/Handloom Heritage.jpg"), // Corrected path
];

// Remove or comment out categoriesData if not being used
// const categoriesData = [
//   {
//     title: "Fabrics",
//     image: require("../../img/fabrics.jpg"),
//     description: "Premium quality fabrics for all your needs",
//     items: ["Cotton", "Silk", "Wool", "Synthetic", "Linen", "Denim, Georgette,chiffon,polyster,Nylon,Rayon"]
//   },
//   {
//     title: "Laces",
//     image: require("../../img/laces.jpg"),
//     description: "Elegant laces for decorative and fashion purposes",
//     items: ["Chantilly Lace", "Guipure Lace", "Venice Lace", "Cotton Lace", "Embroidered Lace"]
//   },
//   {
//     title: "Sarees",
//     image: require("../../img/sarees.jpg"),
//     description: "Traditional and modern sarees for every occasion",
//     items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees", "Banarasi Sarees", "Handloom Sarees"]
//   },
//   {
//     title: "Carpets",
//     image: require("../../img/carpets.jpg"),
//     description: "Luxurious carpets and rugs for your home",
//     items: ["Persian Carpets", "Modern Rugs", "Traditional Carpets", "Area Rugs", "Designer Carpets"]
//   }
// ];

const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerSearchTerm.includes('fabric') || lowerSearchTerm.includes('cotton') || 
        lowerSearchTerm.includes('silk') || lowerSearchTerm.includes('wool')) {
      navigate('/products#products-container');
    } else if (lowerSearchTerm.includes('saree') || lowerSearchTerm.includes('carpet') || 
               lowerSearchTerm.includes('lace')) {
      navigate('/categories#categories-container');
    } else {
      navigate('/products');
    }
  };

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
          {/* Logo */}
          <div className="logo" onClick={() => navigate('/')} style={{ 
            order: '1',
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            background: 'transparent'
          }}>
            <img 
              src={logo}  // Updated to use imported logo
              alt="Company Logo" 
              style={{
                height: '40px',
                width: '80px',
                objectFit: 'contain',
                display: 'block',
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
          
          {/* User Actions - Moved before nav links */}
          <div className="user-actions" style={{ order: '2' }}>
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>

          {/* Navigation Links */}
          <div className="nav-links" style={{ order: '3' }}>
            <button onClick={() => navigate('/')} className="nav-link">Home</button>
            <button onClick={() => navigate('/products')} className="nav-link">Products</button>
            <div className="dropdown">
              <button className="dropbtn" onClick={() => setShowDropdown(!showDropdown)}>
                Categories
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={() => navigate('/categories')} className="dropdown-item dropdown-header">
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
          
          {/* Search bar with navigation */}
          {isScrolled && (
            <div className="header-search-container" style={{ order: '4' }}>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search for fabrics, materials, or designs..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button onClick={handleSearch}>
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
const Slideshow = () => {
  return (
    <video 
      autoPlay
      loop
      muted
      className="background-video"
    >
      <source src={backgroundVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

// In the SearchBar component
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    // Updated navigation logic for categories
    if (lowerSearchTerm.includes('category') || 
        lowerSearchTerm.includes('saree') || 
        lowerSearchTerm.includes('carpet') || 
        lowerSearchTerm.includes('lace') ||
        lowerSearchTerm.includes('fabric')) {
      navigate('/categories#categories-container');
    } else {
      navigate('/products');
    }
  };
  
  return (
    <div className="search-container">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search for fabrics, materials, or designs..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch}>
          <i className="fas fa-search"></i> Search
        </button>
      </div>
    </div>
  );
};

// Update the header search bar in NavBar component
// Remove this standalone block (around line 224):
// {isScrolled && (
//   <div className="header-search-container" style={{ order: '4' }}>
//     <div className="search-box">
//       <input 
//         type="text" 
//         placeholder="Search for fabrics, materials, or designs..." 
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onKeyPress={(e) => {
//           if (e.key === 'Enter') {
//             handleSearch();
//           }
//         }}
//       />
//       <button onClick={handleSearch}>
//         <i className="fas fa-search"></i> Search
//       </button>
//     </div>
//   </div>
// )}

// In the FeaturedProducts component
const FeaturedProducts = () => {
  const navigate = useNavigate(); // Add this line
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
  
  // Define the textileTypes array
  const textileTypes = [
    { name: "Addateegala", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Ainavailli", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Alamuru", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Allavaram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Amalapuram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Ambajipeta", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Anaparthy", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Atreyapuram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Biccavolu", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Devipatnam", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Gandepalle", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Gangavaram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Gokavaram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Gollaprolu", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "I Polavaram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Jaggampeta", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kadiam", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kajuluru", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kakinada Rural", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kakinada Urban", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kapileswarapuram", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Karapa", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Katrenikona", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kirlampudi", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Korukonda", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") },
    { name: "Kottur", description: "Cotton fabric manufacturing center", image: require("../../img/cotton.jpg") }
  ];
  
  return (
    <section className="featured-section">
      <h2>Types of fabrics</h2>
      <Slider {...settings} className="circle-icon-slider">
        {textileTypes.map((textile, index) => (
          <div className="circle-icon-card" key={index} onClick={() => navigate('/products')}>
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

// In the Categories component
const Categories = () => {
  const navigate = useNavigate(); // Add this line
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
          <div className="category-tile" key={index} onClick={() => navigate('/categories')}>
            <img src={category.image} alt={category.name} className="category-image" />
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

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-container">
      <NavBar />
      <SearchBar />
      <FeaturedProducts />
      <Categories />
      <section className="about-section">
        <div className="about-content">
          <h2>Crafting Excellence in Textiles</h2>
          <p>With over 25 years of expertise in textile manufacturing and trading, we bring you the finest quality fabrics from across India.</p>
          <button className="learn-more" onClick={() => navigate('/about')}>Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;