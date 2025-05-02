import React, { useEffect, useState } from "react";
import { useNavigate }
 from "react-router-dom";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import logo from '../../img/logo.jpeg';
import backgroundImage from '../../img/back4.jpeg';


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
    <div className="hero"> /</div>
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
          { name: "Cotton" },
          { name: "Silk" },
          { name: "Wool" },
          { name: "Linen" },
          { name: "Jute" }
        ]
      },
      {
        type: "Synthetic Fabrics",
        varieties: [
          { name: "Polyester" },
          { name: "Nylon" },
          { name: "Rayon" }
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
          <div className="left-section">
            <div className="logo" onClick={() => navigate('/')}>
              <img src={logo} alt="Logo" />
            </div>
  
            <div className="nav-links">
              <button onClick={() => navigate('/')} className="nav-link">Home</button>
              
              <div className="dropdown-products">
                <button 
                  className="nav-link"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  Products
                </button>
                {showProductsDropdown && (
                  <div 
                    className="products-dropdown-content"
                    onMouseEnter={() => setShowProductsDropdown(true)}
                    onMouseLeave={() => setShowProductsDropdown(false)}
                  >
                    <h3 className="dropdown-title">Fabric Types</h3>
                    <div className="products-scroll-container">
                      {fabricTypes.map((fabric, idx) => (
                        <div key={idx} className="product-preview" onClick={() => navigate('/products')}>
                          <div className="product-image">
                            <img src={fabric.image} alt={fabric.name} />
                          </div>
                          <div className="product-info">
                            <h4>{fabric.name}</h4>
                            <p>{fabric.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="dropdown">
                <button 
                  className="dropbtn"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  Categories
                </button>
                {showDropdown && (
                  <div 
                    className="dropdown-content"
                    onMouseEnter={() => setShowDropdown(true)}
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    <div className="categories-scroll-container">
                      <div className="categories-main-list">
                        {categoriesData.map((category, idx) => (
                          <div 
                            key={idx} 
                            className={`category-main-item ${selectedCategory?.title === category.title ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            <div className="category-main-image">
                              <img src={category.image} alt={category.title} />
                            </div>
                            <div className="category-main-info">
                              <h4>{category.title}</h4>
                              <p>{category.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      {selectedCategory && (
                        <div className="category-details">
                          <div className="types-column">
                            <h3>{selectedCategory.title} Types</h3>
                            <div className="types-list">
                              {selectedCategory.items.map((item, idx) => (
                                <div 
                                  key={idx}
                                  className={`type-item ${selectedType?.type === item.type ? 'active' : ''}`}
                                  onClick={() => setSelectedType(item)}
                                >
                                  <div className="type-content">
                                    <span className="type-name">{item.type}</span>
                                    <div className="varieties-list">
                                      {item.varieties.map((variety, i) => (
                                        <div key={i} className="variety-item">
                                          <h5>{variety.name}</h5>
                                          <p>{variety.description}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="nav-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
            />
            <span className="search-icon" onClick={handleSearch}>🔍</span>
            {showSuggestions && (
              <div className="search-suggestions">
                {Object.keys(suggestions).map(section => (
                  <div className="suggestion-section" key={section}>
                    <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                    {suggestions[section].map((item, i) => (
                      <div key={i} className="suggestion-item" onClick={() => {
                        setSearchTerm(item);
                        setShowSuggestions(false);
                        navigate('/products');
                      }}>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="right-section">
            <div className="nav-search">
              <button className="auth-btn signin-btn" onClick={() => navigate('/signin')}>
                Sign In
              </button>
              <button className="auth-btn signup-btn" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


const ProductSection = () => {
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
      price: 2999
    },
    {
      id: 2,
      name: "Sky Blue Pure Cotton Saree",
      image: require("../../img/cotton.jpg"),
      price: 3499
    },
    {
      id: 3,
      name: "Designer Printed Cotton Saree",
      image: require("../../img/cotton.jpg"),
      price: 2799
    }
  ];

  return (
    <section className="products-section">

      <div className="filter-container">
        <div className="filter-group">
          <h3>PRICE RANGE</h3>
          <div className="filter-options">
            <label><input type="checkbox" /> Under ₹1000</label>
            <label><input type="checkbox" /> ₹1000 - ₹2000</label>
            <label><input type="checkbox" /> ₹2000 - ₹3000</label>
            <label><input type="checkbox" /> Above ₹3000</label>
          </div>
        </div>

        <div className="filter-group">
          <h3>FABRIC</h3>
          <div className="filter-options">
            <label><input type="checkbox" /> Cotton</label>
            <label><input type="checkbox" /> Silk</label>
            <label><input type="checkbox" /> Linen</label>
            <label><input type="checkbox" /> Synthetic</label>
          </div>
        </div>

        <div className="filter-group">
          <h3>COLOUR</h3>
          <div className="filter-options">
            <label><input type="checkbox" /> Green</label>
            <label><input type="checkbox" /> Blue</label>
            <label><input type="checkbox" /> Red</label>
            <label><input type="checkbox" /> Black</label>
          </div>
        </div>

        <div className="filter-group">
          <h3>CRAFT</h3>
          <div className="filter-options">
            <label><input type="checkbox" /> Screen Print</label>
            <label><input type="checkbox" /> Hand Paint</label>
            <label><input type="checkbox" /> Block Print</label>
            <label><input type="checkbox" /> Embroidery</label>
          </div>
        </div>
      </div>

      
        <div className="products-fabrics">
          <h2> Types of  fabrics</h2>
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
      <h2>Types of Fabrics</h2>
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
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for fabrics, sarees, and more..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          <button className="search-button" onClick={handleSearch}>
            <span className="search-icon">🔍</span>
          </button>
        </div>
        {showSuggestions && (
          <div className="search-suggestions">
            {Object.keys(suggestions).map(section => (
              <div className="suggestion-section" key={section}>
                <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                {suggestions[section].map((item, i) => (
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
    </div>
  );
};

export default Home;
