import React from 'react';
import { useNavigate } from 'react-router-dom';
import './seasonsfabrics.css';

const SeasonsFabrics = () => {
  const navigate = useNavigate();

  const seasonalFabrics = [
    {
      season: "Summer",
      fabrics: [
        {
          name: "Cotton",
          description: "Lightweight and breathable cotton perfect for hot weather",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Lawn Cotton", "Muslin", "Voile"]
        },
        {
          name: "Linen",
          description: "Natural fiber that keeps you cool and fresh",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Pure Linen", "Linen Blend", "Handwoven Linen"]
        }
      ]
    },
    {
      season: "Winter",
      fabrics: [
        {
          name: "Wool",
          description: "Warm and cozy wool fabrics for cold weather",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Merino Wool", "Cashmere", "Tweed"]
        },
        {
          name: "Velvet",
          description: "Luxurious and warm fabric perfect for winter wear",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Silk Velvet", "Cotton Velvet", "Stretch Velvet"]
        }
      ]
    },
    {
      season: "Spring",
      fabrics: [
        {
          name: "Chiffon",
          description: "Light and flowing fabric for spring fashion",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Silk Chiffon", "Polyester Chiffon", "Printed Chiffon"]
        },
        {
          name: "Cotton-Silk",
          description: "Perfect blend for spring weather",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Light Blend", "Medium Weight", "Printed Blend"]
        }
      ]
    },
    {
      season: "Monsoon",
      fabrics: [
        {
          name: "Quick-Dry Fabrics",
          description: "Weather-resistant and fast-drying materials",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Polyester Blend", "Nylon Mix", "Technical Fabrics"]
        },
        {
          name: "Synthetic Blend",
          description: "Durable and moisture-wicking fabrics",
          image: require("../../../img/cotton.jpg"),
          varieties: ["Poly-Cotton", "All-Weather", "Water-Resistant"]
        }
      ]
    }
  ];

  return (
    <div className="seasons-fabrics-container">
      <header className="seasons-header">
        <h1>Seasonal Fabric Collection</h1>
        <p>Discover the perfect fabrics for every season</p>
      </header>

      <div className="seasons-grid">
        {seasonalFabrics.map((season, index) => (
          <div key={index} className="season-section">
            <h2 className="season-title">{season.season}</h2>
            <div className="fabrics-grid">
              {season.fabrics.map((fabric, idx) => (
                <div key={idx} className="fabric-card" onClick={() => navigate(`/fabric/${fabric.name.toLowerCase()}`)}>
                  <div className="fabric-image">
                    <img src={fabric.image} alt={fabric.name} />
                  </div>
                  <div className="fabric-content">
                    <h3>{fabric.name}</h3>
                    <p>{fabric.description}</p>
                    <div className="varieties-list">
                      {fabric.varieties.map((variety, vidx) => (
                        <span key={vidx} className="variety-tag">{variety}</span>
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