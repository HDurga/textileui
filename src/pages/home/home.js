import React, { useEffect, useState } from "react";
import { useNavigate }
from "react-router-dom";
import "./home.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import logo from '../../img/logo imag.png';
import backgroundImage from '../../img/back4.jpeg';
import ShopByCategory from "../shopbycategory/shopbycategory";
import SeasonsFabrics from "./seasonsfabrics/seasonsfabrics";

import { useTranslation } from 'react-i18next';
import '../../i18n';


const Slideshow = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const suggestions = {
    products: ['Cotton', 'Silk', 'Wool', 'Synthetic', 'Linen', 'Denim', 'Georgette', 'Chiffon', 'Polyester', 'Nylon', 'Rayon'],
    categories: ['Fabrics', 'Laces', 'Sarees', 'Carpets']
  };

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerSearchTerm.includes('fabric') || suggestions.products.some(p => lowerSearchTerm.includes(p.toLowerCase()))) {
      navigate('/products');
    } else if (lowerSearchTerm.includes('saree') || lowerSearchTerm.includes('carpet') || lowerSearchTerm.includes('lace')) {
      navigate('/categories');
    } else {
      navigate('/products');
    }
  };

  return (
    <div className="hero"></div>
  );
};


const categoriesData = [
  {
    title: "Fabrics",
    image: require("../../img/cotton.jpg"),
    items: [
      {
        type: "Natural Fabrics",
        varieties: [
          { name: "Cotton", translationKey: "materials.cotton" },
          { name: "Silk", translationKey: "materials.silk" },
          { name: "Wool", translationKey: "materials.wool" },
          { name: "Linen", translationKey: "materials.linen" },
          { name: "Jute", translationKey: "materials.jute" }
        ]
      },
      {
        type: "Synthetic Fabrics",
        varieties: [
          { name: "Polyester", translationKey: "materials.polyester" },
          { name: "Nylon", translationKey: "materials.nylon" },
          { name: "Rayon", translationKey: "materials.rayon" }
        ]
      }
    ]
  },
  {
    title: "Laces",
    image: require("../../img/cotton.jpg"),
    items: [
      {
        type: "Traditional Laces",
        varieties: [
          { name: "Cotton Lace" },
          { name: "Silk Lace" },
          { name: "Crochet Lace" }
        ]
      },
      {
        type: "Modern Laces",
        varieties: [
          { name: "Synthetic Lace" },
          { name: "Embroidered Lace" },
          { name: "Metallic Lace" }
        ]
      }
    ]
  },
  {
    title: "Sarees",
    image: require("../../img/cotton.jpg"),
    items: [
      {
        type: "Traditional Sarees",
        varieties: [
          { name: "Handloom" },
          { name: "Ikat" },
          { name: "Temple" },
          { name: "Banarasi" }
        ]
      },
      {
        type: "Modern Sarees",
        varieties: [
          { name: "Designer" },
          { name: "Fusion" },
          { name: "Printed" }
        ]
      }
    ]
  },
  {
    title: "Carpets",
    image: require("../../img/cotton.jpg"),
    items: [
      {
        type: "Traditional Carpets",
        varieties: [
          { name: "Persian" },
          { name: "Turkish" },
          { name: "Indian" }
        ]
      },
      {
        type: "Modern Carpets",
        varieties: [
          { name: "Contemporary" },
          { name: "Industrial" },
          { name: "Eco-friendly" }
        ]
      }
    ]
  }
];

const fabricTypes = [
  { name: "Cotton Fabrics", description: "Natural and breathable", image: require("../../img/cotton.jpg") },
  { name: "Silk Designer", description: "Luxurious and elegant", image: require("../../img/cotton.jpg") },
  { name: "Handloom Fabrics", description: "Traditional craftsmanship", image: require("../../img/cotton.jpg") },
  { name: "Linen Fabrics", description: "Cool and durable", image: require("../../img/cotton.jpg") },
  { name: "Jute Fabrics", description: "Eco-friendly and sturdy", image: require("../../img/jute.jpeg") },
  { name: "Polyester Fabrics", description: "Durable and wrinkle-resistant", image: require("../../img/cotton.jpg") },
  { name: "Rayon/Viscose Fabrics", description: "Soft and flowing", image: require("../../img/cotton.jpg") }
];

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);
  const [selectedType, setSelectedType] = useState(null);
  
  
  const suggestions = {
    products: ['Cotton', 'Silk', 'Wool', 'Synthetic', 'Linen', 'Denim', 'Georgette'],
    categories: ['Fabrics', 'Laces', 'Sarees', 'Carpets'],
    sareeTypes: ['Handloom Heritage', 'Ikat Traditions', 'Temple Designs', 'Modern Innovations']
  };

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerSearchTerm.includes('fabric') || suggestions.products.some(p => lowerSearchTerm.toLowerCase().includes(p.toLowerCase()))) {
      navigate('/products');
    } else if (lowerSearchTerm.includes('saree') || lowerSearchTerm.includes('carpet') || lowerSearchTerm.includes('lace')) {
      navigate('/categories');
    } else {
      navigate('/products');
    }
  };
  
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Add categories data
  const categories = [
    { 
      name: "Handloom Heritage", 
      description: "Ancient weaving...", 
      image: require("../../img/cotton.jpg") 
    },
    { 
      name: "Ikat Traditions", 
      description: "Distinctive tie-dye...", 
      image: require("../../img/cotton.jpg")
    },
    { 
      name: "Temple Designs", 
      description: "Motifs inspired by temples", 
      image: require("../../img/cotton.jpg") 
    }
    // Add any additional categories here
  ];

  return (
    <header className="site-header">
      <nav className="nav-barhome">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Logo" className="transparent-logo" />
          </div>

          {/* Navigation Links and Categories */}
          <div className="nav-menu">
            {/* Language Selector */}
            <div className="nav-item dropdown">
              <span>
                <i className="fas fa-globe"></i>
                {i18n.language.toUpperCase()}
              </span>
              <div className="dropdown-content">
                <div className="language-list">
                <button onClick={() => handleLanguageChange('en')}>English</button>
                <button onClick={() => handleLanguageChange('hi')}>Hindi</button>
                <button onClick={() => handleLanguageChange('te')}>Telugu</button>
                </div>
              </div>
            </div>

            {/* Region dropdown */}
            <div className="nav-item dropdown">
              <span>{t('navigation.region')}</span>
              <div className="dropdown-content">
                <div className="region-grid">
                  <div className="region-list">
                    <div className="region-item"><span>{t('regions.rajahmundry')}</span></div>
                    <div className="region-item"><span>{t('regions.srikalahasti')}</span></div>
                    <div className="region-item"><span>{t('regions.mangalgiri')}</span></div>
                    <div className="region-item"><span>{t('regions.venkatgiri')}</span></div>
                    <div className="region-item"><span>{t('regions.uppada')}</span></div>
                    <div className="region-item"><span>{t('regions.ananthapur')}</span></div>
                    <div className="region-item"><span>{t('regions.eluru')}</span></div>
                    <div className="region-item"><span>{t('regions.pochampalli')}</span></div>
                    <div className="region-item"><span>{t('regions.banjara')}</span></div>
                    <div className="region-item"><span>{t('regions.puttapaka')}</span></div>
                    <div className="region-item"><span>{t('regions.gatuppal')}</span></div>
                    <div className="region-item"><span>{t('regions.chautupal')}</span></div>
                    <div className="region-item"><span>{t('regions.koyalguden')}</span></div>
                    <div className="region-item"><span>{t('regions.chirala')}</span></div>
                    <div className="region-item"><span>{t('regions.kadapa')}</span></div>
                    <div className="region-item"><span>{t('regions.banjara')}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Materials dropdown continues here */}
            <div className="nav-item dropdown">
              <span>{t('navigation.materials')}</span>
              <div className="mega-dropdown">
                <div className="mega-content">
                  <div className="category-list">
                    {categoriesData.map((category, idx) => (
                      <div 
                        key={idx}
                        className={`category-item ${selectedCategory?.title === category.title ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {t(`materials.${category.title.toLowerCase()}`)}
                      </div>
                    ))}
                  </div>
                  
                  <div className="subcategory-content">
                    {selectedCategory && (
                      <div className="subcategory-grid">
                        {selectedCategory.items.map((item, idx) => (
                          <div key={idx} className="subcategory-card">
                            <h3>{t(`materials.${item.type.toLowerCase().replace(' ', '_')}`)}</h3>
                            <div className="variety-list">
                              {item.varieties.map((variety, i) => (
                                <div key={i} className="variety-item" onClick={() => navigate('/products')}>
                                  <span>{t(variety.translationKey)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="nav-search">
            <input
              type="text"
              placeholder={t('search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-button" onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
            {showSuggestions && searchTerm && (
              <div className="search-suggestions">
                <div className="suggestion-group">
                  <h4>Products</h4>
                  {suggestions.products
                    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => (
                      <div key={index} className="suggestion-item" onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/products');
                      }}>
                        {item}
                      </div>
                    ))
                  }
                </div>
                <div className="suggestion-group">
                  <h4>Categories</h4>
                  {suggestions.categories
                    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => (
                      <div key={index} className="suggestion-item" onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/categories');
                      }}>
                        {item}
                      </div>
                    ))
                  }
                </div>
              </div>
            )}
          </div>

          {/* Favorites Button */}
          <div className="favorites-container">
            <button className="favorites-btn" onClick={() => navigate('/favorites')}>
              <i className="fas fa-heart"></i>
              <span className="favorites-count">{t('navigation.favorites')}</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="user-profile-container">
            <button className="user-profile-btn">
              <i className="fas fa-user-circle"></i>
              <div className="user-info">
                <span className="user-label">{t('navigation.user')}</span>
              </div>
            </button>
            <div className="user-dropdown">
              <div className="dropdown-header">
                <i className="fas fa-user-circle"></i>
                <div className="header-info">
                  <span className="greeting">{t('user_menu.greeting')}</span>
                  <span className="user-name">{t('navigation.user')}</span>
                </div>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={() => navigate('/profile')}>
                <i className="fas fa-user"></i>
                <span>My Profile</span>
              </div>
              <div className="dropdown-item" onClick={() => navigate('/orders')}>
                <i className="fas fa-shopping-bag"></i>
                <span>My Orders</span>
              </div>
              <div className="dropdown-item" onClick={() => navigate('/wishlist')}>
                <i className="fas fa-heart"></i>
                <span>My Wishlist</span>
              </div>
              <div className="dropdown-item">
                <i className="fas fa-tag"></i>
                <span>Offers</span>
              </div>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={() => navigate('/settings')}>
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </div>
              
              <div className="dropdown-divider"></div>
              <div className="dropdown-item">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logo in </span>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="auth-btn signin-btn" onClick={() => navigate('/signin')}>
              {t('navigation.signin')}
            </button>
            <button className="auth-btn signup-btn" onClick={() => navigate('/signup')}>
              {t('navigation.signup')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};


const ProductSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: '',
    fabric: '',
    colour: '',
    craft: '',
    occasion: ''
  });

  const products = [
    {
      id: 1,
      name: "Light Green Rajasthani Screen Printed Pure Cotton Saree",
      image: require("../../img/cotton.jpg"),
      
    },
    {
      id: 2,
      name: "Sky Blue Pure Cotton Saree",
      image: require("../../img/cotton.jpg"),
      
    },
    {
      id: 3,
      name: "Designer Printed Cotton Saree",
      image: require("../../img/cotton.jpg"),
    
    }
  ];

  return (
    <section className="products-section">
      <div className="section-header">
        <h2 className="section-title">Craft Stories</h2>
        <div className="section-divider"></div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { NavBar };
const SearchBar = () => null; // Already handled in NavBar

const FeaturedProducts = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const settings = {
    dots: false, infinite: true, speed: 500,
    slidesToShow: 5, slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 3000,
    pauseOnHover: true, arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  const fabrics = [
    { name: "Cotton", description: "Natural, breathable", image: require("../../img/cotton.jpg") },
    { name: "Silk", description: "Luxurious texture", image: require("../../img/cotton.jpg") },
    { name: "Wool", description: "Warm and cozy", image: require("../../img/cotton.jpg") },
    { name: "Linen", description: "Cool and durable", image: require("../../img/cotton.jpg") }
  ];

  return (
    <section className="featured-section">
      <h2>shop buy Trend</h2>
      <Slider {...settings}>
        {fabrics.map((fabric, idx) => (
          <div 
            key={idx} 
            className="circle-fabric-card" 
            onClick={() => navigate('/products')}
          >
            <div className="circle-fabric-image">
              <img src={fabric.image} alt={fabric.name} />
            </div>
            <div className="circle-fabric-info">
              <h3>{fabric.name}</h3>
              <p>{fabric.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
const SearchSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = {
    products: ['Cotton', 'Silk', 'Wool', 'Synthetic', 'Linen', 'Denim', 'Georgette'],
    categories: ['Fabrics', 'Laces', 'Sarees', 'Carpets']
  };

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerSearchTerm.includes('fabric') || suggestions.products.some(p => lowerSearchTerm.toLowerCase().includes(p.toLowerCase()))) {
      navigate('/products');
    } else if (lowerSearchTerm.includes('saree') || lowerSearchTerm.includes('carpet') || lowerSearchTerm.includes('lace')) {
      navigate('/categories');
    } else {
      navigate('/products');
    }
  };

  return (
    <section className="hero-search-section">
      <div className="search-overlay" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9'
      }}></div>
      <div className="search-container">
      
        {showSuggestions && (
          <div className="search-suggestions">
            {Object.entries(suggestions).map(([section, items]) => (
              <div className="suggestion-section" key={section}>
                <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                <div className="suggestion-items">
                  {items.map((item, i) => (
                    <div 
                      key={i} 
                      className="suggestion-item" 
                      onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/products');
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <SearchSection />
      <ProductSection />
      <FeaturedProducts />
       <ShopByCategory />
       <SeasonsFabrics />
    </div>
  );
};

export default Home;


// Add this function to handle language changes
