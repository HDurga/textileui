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
          { name: "Cotton Lace", translationKey: "materials.varieties.cotton_lace" },
          { name: "Silk Lace", translationKey: "materials.varieties.silk_lace" },
          { name: "Crochet Lace", translationKey: "materials.varieties.crochet_lace" }
        ]
      },
      {
        type: "Modern Laces",
        varieties: [
          { name: "Synthetic Lace", translationKey: "materials.varieties.synthetic_lace" },
          { name: "Embroidered Lace", translationKey: "materials.varieties.embroidered_lace" },
          { name: "Metallic Lace", translationKey: "materials.varieties.metallic_lace" }
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
          { name: "Handloom", translationKey: "materials.varieties.handloom_saree" },
          { name: "Ikat", translationKey: "materials.varieties.ikat_saree" },
          { name: "Temple", translationKey: "materials.varieties.temple_saree" },
          { name: "Banarasi", translationKey: "materials.varieties.banarasi_saree" }
        ]
      },
      {
        type: "Modern Sarees",
        varieties: [
          { name: "Designer", translationKey: "materials.varieties.designer_saree" },
          { name: "Fusion", translationKey: "materials.varieties.fusion_saree" },
          { name: "Printed", translationKey: "materials.varieties.printed_saree" }
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
          { name: "Persian", translationKey: "materials.varieties.persian_carpet" },
          { name: "Turkish", translationKey: "materials.varieties.turkish_carpet" },
          { name: "Indian", translationKey: "materials.varieties.indian_carpet" }
        ]
      },
      {
        type: "Modern Carpets",
        varieties: [
          { name: "Contemporary", translationKey: "materials.varieties.contemporary_carpet" },
          { name: "Industrial", translationKey: "materials.varieties.industrial_carpet" },
          { name: "Eco-friendly", translationKey: "materials.varieties.eco_friendly_carpet" }
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
      name: t("categories.handloom_heritage"), 
      description: t("categories.handloom_description"), 
      image: require("../../img/cotton.jpg") 
    },
    { 
      name: t("categories.ikat_traditions"), 
      description: t("categories.ikat_description"), 
      image: require("../../img/cotton.jpg")
    },
    { 
      name: t("categories.temple_designs"), 
      description: t("categories.temple_description"), 
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
                    <div className="region-item"><span>{t('regions.Rajahmundry')}</span></div>
                    <div className="region-item"><span>{t('regions.Srikalahasti')}</span></div>
                    <div className="region-item"><span>{t('regions.Mangalgiri')}</span></div>
                    <div className="region-item"><span>{t('regions.Venkatgiri')}</span></div>
                    <div className="region-item"><span>{t('regions.Uppada')}</span></div>
                    <div className="region-item"><span>{t('regions.Ananthapur')}</span></div>
                    <div className="region-item"><span>{t('regions.Eluru')}</span></div>
                    <div className="region-item"><span>{t('regions.Pochampalli')}</span></div>
                    <div className="region-item"><span>{t('regions.Banjara')}</span></div>
                    <div className="region-item"><span>{t('regions.Puttapaka')}</span></div>
                    <div className="region-item"><span>{t('regions.Gatuppal')}</span></div>
                    <div className="region-item"><span>{t('regions.Chautupal')}</span></div>
                    <div className="region-item"><span>{t('regions.Koyalguden')}</span></div>
                    <div className="region-item"><span>{t('regions.Chirala')}</span></div>
                    <div className="region-item"><span>{t('regions.Kadapa')}</span></div>
                    <div className="region-item"><span>Banjara</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Materials dropdown */}
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
                            <h3>{t(`materials.types.${item.type.toLowerCase().replace(' ', '_')}`)}</h3>
                            <div className="variety-list">
                              {item.varieties.map((variety, i) => (
                                <div key={i} className="variety-item" onClick={() => navigate('/products')}>
                                  <span>{variety.translationKey ? t(variety.translationKey) : t(`materials.varieties.${variety.name.toLowerCase().replace(' ', '_')}`)}</span>
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
            <div className="search-input-wrapper">
              <div className="search-icon">
                <i className="fas fa-search"></i>
              </div>
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
            </div>
            
            {showSuggestions && searchTerm && (
              <div className="search-suggestions">
                <div className="suggestion-group">
                  <h4>{t('search.products')}</h4>
                  {suggestions.products
                    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => (
                      <div key={index} className="suggestion-item" onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/products');
                      }}>
                        <i className="fas fa-tag"></i>
                        <span>{t(`products.${item.toLowerCase().replace(' ', '_')}`)}</span>
                      </div>
                    ))
                  }
                </div>
                <div className="suggestion-group">
                  <h4>{t('search.categories')}</h4>
                  {suggestions.categories
                    .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => (
                      <div key={index} className="suggestion-item" onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/categories');
                      }}>
                        <i className="fas fa-folder"></i>
                        <span>{t(`categories.${item.toLowerCase().replace(' ', '_')}`)}</span>
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
              <span className="favorites-count">{t('Favorites')}</span>
            </button>
          </div>

          {/* User Profile */}
          <div className="user-profile-container">
            <button className="user-profile-btn">
              <i className="fas fa-user-circle"></i>
              <div className="user-info">
                <span className="user-label">User</span>
              </div>
            </button>
            <div className="user-dropdown">
              <div className="dropdown-header">
                <i className="fas fa-user-circle"></i>
                <div className="header-info">
                  <span className="greeting">Welcome</span>
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
                <span>Log Out</span>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="auth-btn signin-btn" onClick={() => navigate('/signin')}>
              Sign In
            </button>
            <button className="auth-btn signup-btn" onClick={() => navigate('/signup')}>
              Sign Up
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
        <h2 className="section-title">{t('home.craft_stories')}</h2>
        <div className="section-divider"></div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image">
              <img src={product.image} alt={t(product.name)} />
            </div>
            <div className="product-details">
              <h3>{t(`products.${product.id}`)}</h3>
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
    { 
      name: t("materials.cotton"),
      description: t("materials.cotton_description"), 
      image: require("../../img/cotton.jpg") 
    },
    { 
      name: t("materials.silk"),
      description: t("materials.silk_description"), 
      image: require("../../img/cotton.jpg") 
    },
    { 
      name: t("materials.wool"),
      description: t("materials.wool_description"), 
      image: require("../../img/cotton.jpg") 
    },
    { 
      name: t("materials.linen"),
      description: t("materials.linen_description"), 
      image: require("../../img/cotton.jpg") 
    }
  ];

  return (
    <section className="featured-section">
      <h2>{t('home.shop_by_trend')}</h2>
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
    <div className="home-container">
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
