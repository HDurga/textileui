import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './fabricsCategory.css';

const FabricsCategory = () => {
  const navigate = useNavigate();
  const [selectedFabric, setSelectedFabric] = useState(null);
  const fabricRefs = useRef({});
  
  // Modify the fabric types data to use images that exist in your project
  const fabricTypes = [
    {
      id: "cotton",
      name: "Cotton",
      description: "A soft, breathable natural fiber that's comfortable and versatile.",
      properties: "Breathable, Absorbent, Soft, Durable",
      uses: "T-shirts, Dresses, Underwear, Bedding",
      images: [
        require("../../img/cotton.jpg"),
        require("../../img/cotton.jpg"),
        require("../../img/cotton.jpg")
      ]
    },
    {
      id: "silk",
      name: "Silk",
      description: "A luxurious natural protein fiber known for its smooth texture and natural sheen.",
      properties: "Lustrous, Smooth, Strong, Insulating",
      uses: "Formal wear, Scarves, Lingerie, High-end garments",
      images: [
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg")
      ]
    },
    {
      id: "wool",
      name: "Wool",
      description: "A natural fiber known for its warmth and insulation properties.",
      properties: "Warm, Insulating, Moisture-wicking, Resilient",
      uses: "Sweaters, Coats, Blankets, Winter clothing",
      images: [
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg")
      ]
    },
    {
      id: "linen",
      name: "Linen",
      description: "A lightweight, breathable fabric made from flax fibers.",
      properties: "Breathable, Strong, Absorbent, Gets softer with use",
      uses: "Summer clothing, Tablecloths, Napkins, Bedding",
      images: [
        require("../../img/linen.jpg"),
        require("../../img/linen.jpg"),
        require("../../img/linen.jpg")
      ]
    },
    {
      id: "denim",
      name: "Denim",
      description: "A sturdy cotton twill fabric known for its durability.",
      properties: "Durable, Heavy, Versatile, Ages well",
      uses: "Jeans, Jackets, Bags, Casual wear",
      images: [
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg")
      ]
    },
    {
      id: "georgette",
      name: "Georgette",
      description: "A lightweight, sheer fabric with a crinkled surface.",
      properties: "Sheer, Crinkled texture, Flowing drape, Lightweight",
      uses: "Dresses, Blouses, Scarves, Evening wear",
      images: [
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg"),
        require("../../img/fabrics.jpg")
      ]
    },
    {
      id: "chiffon",
      name: "Chiffon",
      description: "An extremely lightweight, sheer fabric with a soft, floating appearance.",
      properties: "Very lightweight, Transparent, Soft, Flowing",
      uses: "Evening wear, Scarves, Blouses, Wedding dresses",
      images: [
        require("../../img/chiffon.jpg"),
        require("../../img/chiffon.jpg"),
        require("../../img/chiffon.jpg")
      ]
    },
    {
      id: "polyester",
      name: "Polyester",
      description: "A durable, wrinkle-resistant synthetic fabric.",
      properties: "Wrinkle-resistant, Quick-drying, Durable, Lightweight",
      uses: "Activewear, Blended fabrics, Outdoor clothing, Bedding",
      images: [
        require("../../img/polyester.jpg"),
        require("../../img/polyester.jpg"),
        require("../../img/polyester.jpg")
      ]
    },
    {
      id: "nylon",
      name: "Nylon",
      description: "A strong, lightweight synthetic fiber known for its elasticity.",
      properties: "Strong, Elastic, Lightweight, Water-resistant",
      uses: "Stockings, Swimwear, Outdoor gear, Technical clothing",
      images: [
        require("../../img/nylon.jpg"),
        require("../../img/nylon.jpg"),
        require("../../img/nylon.jpg")
      ]
    },
    {
      id: "rayon",
      name: "Rayon",
      description: "A semi-synthetic fabric made from regenerated cellulose fiber.",
      properties: "Soft, Absorbent, Breathable, Good drape",
      uses: "Dresses, Blouses, Linings, Lightweight clothing",
      images: [
        require("../../img/rayon.jpg"),
        require("../../img/rayon.jpg"),
        require("../../img/rayon.jpg")
      ]
    }
  ];

  // Scroll to the selected fabric's images when clicked
  useEffect(() => {
    if (selectedFabric && fabricRefs.current[selectedFabric]) {
      fabricRefs.current[selectedFabric].scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedFabric]);

  return (
    <div className="fabrics-category-page">
      <header className="fabrics-header">
        <div className="header-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={require("../../img/logo.png")} alt="Logo" />
          </div>
          <h1>Fabric Collection</h1>
          <button className="back-button" onClick={() => navigate('/categories')}>
            Back to Categories
          </button>
        </div>
      </header>

      <div className="fabrics-content">
        {/* Left sidebar with fabric items */}
        <div className="fabrics-sidebar">
          <h2>Fabric Types</h2>
          <ul className="fabric-list">
            {fabricTypes.map((fabric) => (
              <li 
                key={fabric.id} 
                className={`fabric-item ${selectedFabric === fabric.id ? 'active' : ''}`}
                onClick={() => setSelectedFabric(fabric.id)}
              >
                <span className="fabric-name">{fabric.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side with scrollable fabric images */}
        <div className="fabrics-gallery">
          {fabricTypes.map((fabric) => (
            <div 
              key={fabric.id} 
              className="fabric-section"
              ref={el => fabricRefs.current[fabric.id] = el}
              id={fabric.id}
            >
              <h2>{fabric.name}</h2>
              <div className="fabric-details">
                <p className="fabric-description">{fabric.description}</p>
                <div className="fabric-content-wrapper">
                  <div className="fabric-properties">
                    <div className="property">
                      <h3>Properties</h3>
                      <p>{fabric.properties}</p>
                    </div>
                    <div className="property">
                      <h3>Common Uses</h3>
                      <p>{fabric.uses}</p>
                    </div>
                  </div>
                  <div className="fabric-images">
                    {fabric.images.map((image, index) => (
                      <div className="fabric-image-card" key={index}>
                        <img src={image} alt={`${fabric.name} ${index + 1}`} />
                        <div className="image-overlay">
                          <h4>{fabric.name} Style {index + 1}</h4>
                        </div>
                      </div>
                    ))}
                    <button className="scroll-arrow scroll-right" onClick={(e) => {
                      const container = e.target.parentNode;
                      container.scrollBy({ left: 300, behavior: 'smooth' });
                    }}>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FabricsCategory;