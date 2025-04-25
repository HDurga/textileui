// First, let's fix the import statements at the top
// Remove unused imports
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';  // Remove useRef
import { useNavigate, useParams } from 'react-router-dom';
import './categories.css';
import fabricsImage from '../../img/fabrics.jpg';
import lacesImage from '../../img/laces.jpg';
import sareesImage from '../../img/sarees.jpg';
import carpetsImage from '../../img/carpets.jpg';

// Then update your categoriesData image references
const categoriesData = [
  {
    title: "Fabrics",
    image: fabricsImage,
    description: "Premium quality fabrics featuring traditional varieties",
    items: [
      {
        type: "Cotton",
        varieties: [
          "Malkha Cotton", "Muramanda Cotton Shirting", "Muramanda Cotton Sarees",
          "Dulla Cotton Sarees", "Vemavaram Lightweight Sarees", "Uppada Jamdani Cotton Sarees",
          "Pasalapudi Cotton Fabrics", "GWWSPC Cotton Varieties"
        ]
      },
      {
        type: "Silk",
        varieties: [
          "Uppada Jamdani Sarees", "Peddapuram Silk Dhotis & Shirting", "Veeravaram Silk Sarees",
          "Pure Silk", "Raw Silk", "Mulberry Silk"
        ]
      },
      {
        type: "Synthetic",
        varieties: [
          "Polyester", "Nylon", "Rayon", "Blended Fabrics",
          "Geotextiles", "Microfiber"
        ]
      },
      {
        type: "Denim",
        varieties: [
          "Raw Denim", "Slim-Fit Denim", "Stretch Denim",
          "Light Wash Denim", "Dark Wash Denim", "Vintage Denim"
        ]
      },
      {
        type: "Linen",
        varieties: [
          "Pure Linen", "Plain Linen Shirting", "Jute-Linen Blend",
          "Household Linen", "Garment Linen", "Handloom Linen"
        ]
      },
      {
        type: "Wool",
        varieties: [
          "Merino Wool", "Cashmere", "Lambswool",
          "Worsted Wool", "Tweed", "Angora Wool"
        ]
      }
    ]
  },
  {
    title: "Laces",
    image: lacesImage,
    description: "Elegant V  for decorative and fashion purposes",
    items: [
      {
        type: "Traditional Laces",
        varieties: [
          "Chantilly Lace", 
          "Guipure Lace",
           "Venice Lace",
          "Cotton Lace",
           "Embroidered Lace"
        ]
      },
      {
        type: "Modern Laces",
        varieties: [
          "Metallic Lace",
           "Sequined Lace",
            "Beaded Lace",
          "Digital Print Lace"
        ]
      }
    ]
  },
  {
    title: "Sarees",
    image: sareesImage,
    description: "Traditional and modern sarees for every occasion",
    items: [
      {
        type: "Traditional Sarees",
        varieties: [
          "Uppada Silk ", 
          "Gadwal ",
           "Pochampally ",
          "Dharmavaram ", 
          "Venkatagiri "
        ]
      },
      {
        type: "Modern Sarees",
        varieties: [
          "Designer ",
           "Digital Print ",
          "Contemporary Silk ", 
          "Fusion "
        ]
      }
    ]
  },
  {
    title: "Carpets",
    image: carpetsImage,
    description: "Luxurious carpets and rugs for your home",
    items: [
      {
        type: "Traditional Carpets",
        varieties: [
          "Persian Style Carpets",
           "Mughal Design Carpets",
          "Oriental Pattern Carpets", 
          "Traditional Indian Carpets"
        ]
      },
      {
        type: "Modern Carpets",
        varieties: [
          "Contemporary Design Rugs", 
          "Geometric Pattern Carpets",
          "Abstract Art Carpets", 
          "Minimalist Design Rugs"
        ]
      }
    ]
  }
];

// Add new state for selected type and its images
// Add this at the top of your component, right after the const declarations
// Remove this line since we already have the disable at the top
// /* eslint-disable-next-line no-unused-vars */
const Categories = ({ categoryData }) => {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Textile+Image';

  const [selectedCategory, setSelectedCategory] = useState(categoryName || null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedVariety, setSelectedVariety] = useState(null);

  // Initialize data
  const dataToUse = categoryData || categoriesData;
  const displayData = categoryName 
    ? dataToUse.filter(cat => 
        cat.title.toLowerCase() === categoryName.toLowerCase() || 
        cat.title.toLowerCase().replace(/\s+/g, '-') === categoryName.toLowerCase())
    : dataToUse;

  // Define NavBar component inside Categories
  const NavBar = () => {
    return (
      <div className="nav-bar">
        <button onClick={() => navigate('/')} className="nav-link">Home</button>
        <button onClick={() => navigate('/products')} className="nav-link">Products</button>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          </div>
        </div>
    );
  };

  // Add image data for fabric types
  const fabricImages = {
    Cotton: [
      { url: "../../img/cotton1.jpg", info: "Premium Cotton Fabric" },
      { url: "../../img/cotton2.jpg", info: "Organic Cotton Material" },
    ],
    Silk: [
      { url: "../../img/silk1.jpg", info: "Pure Silk Fabric" },
      { url: "../../img/silk2.jpg", info: "Traditional Silk Design" },
    ],
    // Add similar entries for other types
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedVariety(null);
  };

  const handleVarietyClick = (variety) => {
    setSelectedVariety(variety);
  };

  // Update the return JSX
  return (
    <div className="categories-container">
      <NavBar />
      <div className="fabric-filter-container">

        <div className="categories-main-content">
          <div className="left-content">
            <div className="categories-circle-grid">
              {displayData.map((category, index) => (
                <div 
                  key={index} 
                  className="category-circle-card"
                  onClick={() => setSelectedCategory(category.title)}
                >
                  <div className="category-circle-image">
                    <img 
                      src={category.image}
                      alt={category.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                      }}
                    />
                  </div>
                  <div className="category-circle-info">
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="categories-list">
              {dataToUse.map((category, index) => (
                <div key={index} className={`category-item ${selectedCategory === category.title ? 'active' : ''}`}>
                  <div className="category-header" onClick={() => setSelectedCategory(category.title)}>
                    <div className="category-item-image">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = fallbackImage;
                        }}
                      />
                    </div>
                    <span>{category.title}</span>
                  </div>
                  <div className={`category-items-list ${selectedCategory === category.title ? 'open' : ''}`}>
                    {category.items && category.items.map((item, idx) => (
                      <div key={idx}>
                        <div 
                          className={`item-type ${selectedType === item.type ? 'active' : ''}`}
                          onClick={() => handleTypeClick(item.type)}
                        >
                          {item.type}
                        </div>
                        {item.varieties && item.varieties.map((variety, vIdx) => (
                          <div 
                            key={vIdx}
                            className={`item-variety ${selectedVariety === variety ? 'active' : ''}`}
                            onClick={() => handleVarietyClick(variety)}
                          >
                            {variety}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Add image display section */}
            {selectedType && fabricImages[selectedType] && (
              <div className="type-images-container">
                <h3>{selectedType} Images</h3>
                <div className="images-grid">
                  {fabricImages[selectedType].map((img, index) => (
                    <div key={index} className="image-box">
                      <img src={img.url} alt={img.info} />
                      <p>{img.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;