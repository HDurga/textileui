import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './categoriess.css';

// Adding a SearchBar component
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  
  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search products, categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </form>
    </div>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="nav-bar">
      <button onClick={() => navigate('/')} className="nav-link">Home</button>
      <button onClick={() => navigate('/products')} className="nav-link">Products</button>
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          <button 
            onClick={() => navigate('/categories')} 
            className="dropdown-item dropdown-header"
          >
            <span className="dropdown-icon">🏷️</span> All Categories
            <span className="dropdown-description">View all textile categories</span>
          </button>
          <div className="dropdown-divider"></div>
        </div>
      </div>
      {/* Add SearchBar to the navbar - this will stay fixed while scrolling */}
      <div className="header-search">
        <SearchBar onSearch={(term) => console.log('Searching for:', term)} />
      </div>
    </div>
  );
};

const Categories = ({ categoryData }) => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Use the data from props if available, otherwise use the local data
  const categoriesData = [
    {
      title: "Fabrics",
      image: require("../../img/fabrics.jpg"),
      description: "Premium quality fabrics for all your needs",
      items: ["Cotton", "Silk", "Wool", "Synthetic", "Linen", "Denim"],
      details: "Our fabric collection features a wide range of high-quality materials sourced from the finest mills around the world. Each fabric is carefully selected for its durability, texture, and aesthetic appeal."
    },
    {
      title: "Laces",
      image: require("../../img/laces.jpg"),
      description: "Elegant laces for decorative and fashion purposes",
      items: ["Chantilly Lace", "Guipure Lace", "Venice Lace", "Cotton Lace", "Embroidered Lace"],
      details: "Our exquisite lace collection showcases intricate patterns and delicate craftsmanship. Perfect for adding elegance to garments, home decor, and special occasion wear."
    },
    {
      title: "Sarees",
      image: require("../../img/sarees.jpg"),
      description: "Traditional and modern sarees for every occasion",
      items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees", "Banarasi Sarees", "Handloom Sarees"],
      details: "Discover our stunning collection of sarees that blend traditional craftsmanship with contemporary designs. Each piece tells a story of cultural heritage and artistic excellence."
    },
    {
      title: "Carpets",
      image: require("../../img/carpets.jpg"),
      description: "Luxurious carpets and rugs for your home",
      items: ["Persian Carpets", "Modern Rugs", "Traditional Carpets", "Area Rugs", "Designer Carpets"],
      details: "Our carpet collection features handcrafted pieces that combine traditional techniques with modern aesthetics. Each carpet is a masterpiece of texture, color, and design."
    }
  ];
  
  // Use the data from props if available, otherwise use the local data
  const dataToUse = categoryData || categoriesData;
  
  // Handle search functionality
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    const term = searchTerm.toLowerCase();
    const results = dataToUse.filter(category => 
      category.title.toLowerCase().includes(term) || 
      category.description.toLowerCase().includes(term) ||
      category.items.some(item => item.toLowerCase().includes(term))
    );
    
    setFilteredData(results);
  };
  
  // Filter items based on selected fabric type
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };
  
  // If we have a categoryName parameter, filter to show only that category
  const displayData = categoryName 
    ? dataToUse.filter(cat => 
        cat.title.toLowerCase() === categoryName || 
        cat.title.toLowerCase().replace(/\s+/g, '-') === categoryName)
    : isSearching ? filteredData : dataToUse;

  // Get all fabric types for the filter
  const allFabricTypes = displayData.reduce((types, category) => {
    if (category.items) {
      return [...types, ...category.items.filter(item => !types.includes(item))];
    }
    return types;
  }, []);

  // Add state for scrollable images
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  return (
    <div className="categories-container">
      <NavBar />
      
      <div className="categories-hero">
        <h1>{categoryName ? `${categoryName.toUpperCase()} Collection` : 'TYPES OF Textiles'}</h1>
        <p>Explore our wide range of textile products</p>
      </div>

      {/* Show search results message if searching */}
      {isSearching && (
        <div className="search-results-info">
          <p>Found {filteredData.length} results for your search</p>
          <button onClick={() => setIsSearching(false)} className="clear-search">
            Clear Search
          </button>
        </div>
      )}

      {/* Updated fabric filter section with circular icons */}
      <div className="fabric-filter-container">
        <div className="filter-sidebar">
          <h3>Filter by Category</h3>
          <div className="filter-icons">
            <div 
              className={`filter-icon ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => {
                handleFilterChange('All');
                setSelectedCategory(null);
              }}
            >
              <div className="icon-circle">
                <span className="icon">🧵</span>
              </div>
              <span className="icon-label">All</span>
            </div>
            
            {/* Main category filters */}
            {dataToUse.map((category, index) => (
              <div 
                key={index}
                className={`filter-icon ${selectedCategory === category.title ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category.title);
                  handleFilterChange('All');
                }}
              >
                <div className="icon-circle">
                  <span className="icon">
                    {category.title === 'Fabrics' ? '🧶' : 
                     category.title === 'Laces' ? '🎀' : 
                     category.title === 'Sarees' ? '👗' : 
                     category.title === 'Carpets' ? '🏠' : '🧵'}
                  </span>
                </div>
                <span className="icon-label">{category.title}</span>
              </div>
            ))}
            
            <div className="filter-divider"></div>
            <h4>Fabric Types</h4>
            
            {/* Fabric type filters */}
            {allFabricTypes.map((fabricType, index) => (
              <div 
                key={`type-${index}`}
                className={`filter-icon ${activeFilter === fabricType ? 'active' : ''}`}
                onClick={() => {
                  handleFilterChange(fabricType);
                  setSelectedCategory(null);
                }}
              >
                <div className="icon-circle">
                  <span className="icon">
                    {fabricType === 'Cotton' ? '🧶' : 
                     fabricType === 'Silk' ? '🎀' : 
                     fabricType === 'Wool' ? '🧣' : 
                     fabricType === 'Synthetic' ? '🧪' : 
                     fabricType === 'Linen' ? '👕' : 
                     fabricType === 'Denim' ? '👖' : 
                     fabricType === 'Chantilly Lace' ? '🎀' :
                     fabricType === 'Guipure Lace' ? '🎀' :
                     fabricType === 'Venice Lace' ? '🎀' :
                     fabricType === 'Cotton Lace' ? '🎀' : '🧵'}
                  </span>
                </div>
                <span className="icon-label">{fabricType}</span>
              </div>
            ))}
          </div>
        </div>
        
        // Add this near the top of your file after the imports
        import fabricsImg from "../../img/fabrics.jpg";
        import lacesImg from "../../img/laces.jpg";
        import sareesImg from "../../img/sarees.jpg";
        import carpetsImg from "../../img/carpets.jpg";
        
        // Then in your component, modify the carousel section:
        {/* Scrollable image gallery on the right */}
        <div className="categories-content">
          {/* Image carousel for selected category */}
          {selectedCategory && (
            <div className="category-carousel">
              <h2>{selectedCategory}</h2>
              <div className="carousel-container">
                {dataToUse
                  .find(cat => cat.title === selectedCategory)
                  .items.map((item, idx) => (
                    <div className="carousel-item" key={idx}>
                      <div className="carousel-image">
                        <img 
                          // Use the category's main image instead of trying to load individual images
                          src={dataToUse.find(cat => cat.title === selectedCategory).image}
                          alt={item}
                        />
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
          
          {/* Regular category grid */}
          <div className="categories-grid">
            {displayData
              .filter(category => !selectedCategory || category.title === selectedCategory)
              .map((category, index) => {
                // Filter items based on active filter
                const filteredItems = activeFilter === 'All' 
                  ? category.items 
                  : category.items.filter(item => item === activeFilter);
                
                // Only show categories that have items matching the filter
                if (activeFilter !== 'All' && filteredItems.length === 0) {
                  return null;
                }
                
                return (
                  <div className="category-card" key={index}>
                    <div className="category-image">
                      <div className="category-type">{category.title}</div>
                      <img src={category.image} alt={category.title} />
                    </div>
                    <div className="category-content">
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                      
                      <div className="category-items">
                        {(activeFilter === 'All' ? category.items : filteredItems).map((item, itemIndex) => (
                          <div 
                            className="item-tag" 
                            key={itemIndex}
                            onClick={() => handleFilterChange(item)}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      
                      <p className="category-details">{category.details}</p>
                      <button 
                        onClick={() => navigate(`/categories/${category.title.toLowerCase().replace(/\s+/g, '-')}`)}
                        className="view-button"
                      >
                        View Collection
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Textile Categories</p>
        <div className="footer-links">
          <button onClick={() => navigate('/contact')} className="footer-link">Contact Us</button>
          <button onClick={() => navigate('/about')} className="footer-link">About</button>
        </div>
      </footer>
    </div>
  );
};

export default Categories;