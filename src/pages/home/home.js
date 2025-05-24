import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import logo from '../../img/logo.jpeg';


import ShopByCategory from "../shopbycategory/shopbycategory";
import SeasonsFabrics from "./seasonalfavorites/seasonsfabrics";

import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';







const categoriesData = [
  {
    title: "Fabrics",
    image: require("../../img/carpetes.jpg"),
    items: [
      {
        type: "Natural Fabrics",
        varieties: [
          { name: "Cotton" },
          { name: "Silk"},
          { name: "Wool" },
          { name: "Linen" },
          { name: "Jute" }
        ]
      },
      {
        type: "Synthetic Fabrics",
        varieties: [
          { name: "Polyester" },
          { name: "Nylon"},
          { name: "Rayon" }
        ]
      }
    ]
  },
  {
    title: "Laces",
    image: '/laces.jpg',
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
    image: '/sarees.jpg',
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
    image: require("../../img/carpetes.jpg"),
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




const Slideshow = () => {
  const { t,i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]); // Add this state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    document.documentElement.lang = lang; // Add this line to set the HTML lang attribute
  };

  // Add categories data
  const categories = [
    { 
      name: t("categories.handloom_heritage"), 
      description: t("categories.handloom_description"), 
      image: "/images/handloom-heritage.jpg" // Changed from require()
    },
    { 
      name: t("categories.ikat_traditions"), 
      description: t("categories.ikat_description"), 
      image: "/images/ikat-sarees.jpg" // Changed from require()
    },
    { 
      name: t("categories.temple_designs"), 
      description: t("categories.temple_description"), 
      image: "/images/temple-sarees.jpg" // Changed from require()
    }
  ];

  return (
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
                  <button onClick={() => handleLanguageChange('en')} lang="en">English</button>
                  <button onClick={() => handleLanguageChange('hi')} lang="hi">हिंदी</button>
                  <button onClick={() => handleLanguageChange('te')} lang="te">తెలుగు</button>
                  <button onClick={() => handleLanguageChange('ta')} lang="ta">தமிழ்</button>
                  <button onClick={() => handleLanguageChange('kn')} lang="kn">ಕನ್ನಡ</button>
                  <button onClick={() => handleLanguageChange('bn')} lang="bn">বাংলা</button>
                </div>
              </div>
            </div>

            {/* Region dropdown */}
            <div className="nav-item dropdown">
              <span>{t('navigation.region')}</span>
              <div className="dropdown-content">
                <div className="region-grid">
                  <div className="region-list">
                    <div className="region-item">{t('regions.rajahmundry')}</div>
                    <div className="region-item">{t('regions.srikalahasti')}</div>
                    <div className="region-item">{t('regions.mangalgiri')}</div>
                    <div className="region-item">{t('regions.venkatgiri')}</div>
                    
                    <div className="region-item">{t('regions.uppada')}</div>
                    <div className="region-item">{t('regions.ananthapur')}</div>
                    <div className="region-item">{t('regions.eluru')}</div>
                    <div className="region-item">{t('regions.pochampalli')}</div>
                    <div className="region-item">{t('regions.banjara')}</div>
                    <div className="region-item">{t('regions.puttapaka')}</div>
                    <div className="region-item">{t('regions.gatuppal')}</div>
                    <div className="region-item">{t('regions.chautupal')}</div>
                    <div className="region-item">{t('regions.koyalguden')}</div>
                    <div className="region-item">{t('regions.chirala')}</div>
                    <div className="region-item">{t('regions.kadapa')}</div>
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
                                <div 
                                  key={i} 
                                  className="variety-item" 
                                  onClick={() => {
                                    const category = selectedCategory.title.toLowerCase();
                                    const type = variety.name.toLowerCase().replace(' ', '_');
                                    navigate(`/products/${category}/${type}`);
                                  }}
                                >
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
            </button>//U
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
    
  );
};


const CategoryList = () => {
  const { t,i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);

  return (
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
  );
};

const fabricTypes = [
  { name: "Cotton Fabrics", description: "Natural and breathable", image: "/images/cotton.jpg" },
  { name: "Silk Designer", description: "Luxurious and elegant", image: "/images/cotton.jpg" },
  { name: "Handloom Fabrics", description: "Traditional craftsmanship", image: "/images/cotton.jpg" },
  { name: "Linen Fabrics", description: "Cool and durable", image: "/images/cotton.jpg" },
  { name: "Jute Fabrics", description: "Eco-friendly and sturdy", image: "/images/jute.jpg" },
  { name: "Polyester Fabrics", description: "Durable and wrinkle-resistant", image: "/images/cotton.jpg" },
  { name: "Rayon/Viscose Fabrics", description: "Soft and flowing", image: "/images/cotton.jpg" }
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
    document.documentElement.lang = lang; // Add this line to set the HTML lang attribute
  };

  // Add categories data
  const categories = [
    { 
      name: t("categories.handloom_heritage"), 
      description: t("categories.handloom_description"), 
      image: "/images/handloom-heritage.jpg" // Changed from require()
    },
    { 
      name: t("categories.ikat_traditions"), 
      description: t("categories.ikat_description"), 
      image: "/images/ikat-sarees.jpg" // Changed from require()
    },
    { 
      name: t("categories.temple_designs"), 
      description: t("categories.temple_description"), 
      image: "/images/temple-sarees.jpg" // Changed from require()
    }
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
                  <button onClick={() => handleLanguageChange('en')} lang="en">English</button>
                  <button onClick={() => handleLanguageChange('hi')} lang="hi">हिंदी</button>
                  <button onClick={() => handleLanguageChange('te')} lang="te">తెలుగు</button>
                  <button onClick={() => handleLanguageChange('ta')} lang="ta">தமிழ்</button>
                  <button onClick={() => handleLanguageChange('kn')} lang="kn">ಕನ್ನಡ</button>
                  <button onClick={() => handleLanguageChange('bn')} lang="bn">বাংলা</button>
                </div>
              </div>
            </div>

            {/* Region dropdown */}
            <div className="nav-item dropdown">
              <span>{t('navigation.region')}</span>
              <div className="dropdown-content">
                <div className="region-grid">
                  <div className="region-list">
                    <div className="region-item">{t('regions.rajahmundry')}</div>
                    <div className="region-item">{t('regions.srikalahasti')}</div>
                    <div className="region-item">{t('regions.mangalgiri')}</div>
                    <div className="region-item">{t('regions.venkatgiri')}</div>
                    <div className="region-item">{t('regions.uppada')}</div>
                    <div className="region-item">{t('regions.ananthapur')}</div>
                    <div className="region-item">{t('regions.eluru')}</div>
                    <div className="region-item">{t('regions.pochampalli')}</div>
                    <div className="region-item">{t('regions.banjara')}</div>
                    <div className="region-item">{t('regions.puttapaka')}</div>
                    <div className="region-item">{t('regions.gatuppal')}</div>
                    <div className="region-item">{t('regions.chautupal')}</div>
                    <div className="region-item">{t('regions.koyalguden')}</div>
                    <div className="region-item">{t('regions.chirala')}</div>
                    <div className="region-item">{t('regions.kadapa')}</div>
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
                                <div 
                                  key={i} 
                                  className="variety-item" 
                                  onClick={() => {
                                    const category = selectedCategory.title.toLowerCase();
                                    const type = variety.name.toLowerCase().replace(' ', '_');
                                    navigate(`/products/${category}/${type}`);
                                  }}
                                >
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
      </div>
      </div>
      </nav>
    </header>
  );
};


const ProductSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Light Green Rajasthani Screen Printed Pure Cotton Saree",
      image: require("../../img/festivalcollection.jpg"),
      
    },
    {
      id: 2,
      name: "Sky Blue Pure Cotton Saree",
      image: require("../../img/printedcottonfabrics.jpg"),
      
    },
    {
      id: 3,
      name: "Designer Printed Cotton Saree",
      image: require("../../img/winter.jpg"),
      
    }
  ];

  return (
    <section className="products-section">
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image">
              <img src={product.image} alt={t(product.name)} />
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
  const { t } = useTranslation();
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
      name: t("featured.fabrics.cotton.name"),
      description: t("featured.fabrics.cotton.description"), 
      image: require("../../img/festivalcollection.jpg"),
    },
    { 
      name: t("featured.fabrics.silk.name"),
      description: t("featured.fabrics.silk.description"), 
      image: require("../../img/jute.jpeg"),
    },
    { 
      name: t("featured.fabrics.wool.name"),
      description: t("featured.fabrics.wool.description"), 
      image: require("../../img/printedcottonfabrics.jpg"),
    },
    { 
      name: t("featured.fabrics.linen.name"),
      description: t("featured.fabrics.linen.description"), 
      image: require("../../img/fabrics.jpg"),
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

  return (
    <section className="search-section">
      <div className="search-overlay">
        <div className="search-container">
          <div className="search-content">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for fabrics, designs, or collections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
              <button onClick={() => navigate('/search')}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
          {/* ... rest of the suggestions code ... */}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home-container"> 
      <NavBar />
      <SearchSection />
      <section className="products-section">
        <div className="section-header">
          <div className="section-divider"></div>
        </div>
      </section>
      <ProductSection />
      <FeaturedProducts />
      <ShopByCategory />
      <SeasonsFabrics />
    </div>
  );
};

export default Home;



