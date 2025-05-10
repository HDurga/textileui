import React from 'react';
import './seasonsfabrics.css';

const SeasonsFabrics = () => {
  const seasonalFabrics = {
    Spring: [
      {
        name: "Cotton Lawn",
        description: "Lightweight and breathable cotton perfect for spring weather",
        varieties: ["Printed", "Solid", "Embroidered"],
        image: require("../../../img/cotton.jpg")
      },
      {
        name: "Linen Blend",
        description: "Fresh and airy fabric ideal for spring attire",
        varieties: ["Natural", "Dyed", "Textured"],
        image: require("../../../img/cotton.jpg")
      }
    ],
    Summer: [
      {
        name: "Pure Cotton",
        description: "Cool and comfortable cotton for hot summer days",
        varieties: ["Muslin", "Voile", "Poplin"],
        image: require("../../../img/cotton.jpg")
      },
      {
        name: "Light Silk",
        description: "Breathable silk perfect for summer evenings",
        varieties: ["Chiffon", "Georgette", "Crepe"],
        image: require("../../../img/cotton.jpg")
      }
    ],
    Fall: [
      {
        name: "Wool Blend",
        description: "Warm and stylish fabric for autumn weather",
        varieties: ["Tweed", "Flannel", "Cashmere Blend"],
        image: require("../../../img/cotton.jpg")
      },
      {
        name: "Cotton Twill",
        description: "Durable and comfortable for fall activities",
        varieties: ["Herringbone", "Gabardine", "Denim"],
        image: require("../../../img/cotton.jpg")
      }
    ],
    Winter: [
      {
        name: "Pure Wool",
        description: "Thick and warm wool for winter comfort",
        varieties: ["Merino", "Lambswool", "Worsted"],
        image: require("../../../img/cotton.jpg")
      },
      {
        name: "Velvet",
        description: "Luxurious and warm fabric for winter occasions",
        varieties: ["Silk Velvet", "Cotton Velvet", "Stretch Velvet"],
        image: require("../../../img/cotton.jpg")
      }
    ]
  };

  return (
    <div className="seasons-fabrics-container">
      <div className="seasons-header">
        <h1>Seasones Favorites</h1>
        <p>Discover our curated selection of fabrics perfect for every season</p>
      </div>
      
      <div className="seasons-grid">
        {Object.entries(seasonalFabrics).map(([season, fabrics]) => (
          <div key={season} className="season-section">
            <h2 className="season-title">{season}</h2>
            <div className="fabrics-grid">
              {fabrics.map((fabric, index) => (
                <div key={index} className="fabric-card">
                  <div className="fabric-image">
                    <img src={fabric.image} alt={fabric.name} />
                  </div>
                  <div className="fabric-content">
                    <h3>{fabric.name}</h3>
                    <p>{fabric.description}</p>
                    <div className="varieties-list">
                      {fabric.varieties.map((variety, vIndex) => (
                        <span key={vIndex} className="variety-tag">{variety}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonsFabrics;