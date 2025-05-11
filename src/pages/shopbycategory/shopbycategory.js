import React from 'react';
import { useNavigate } from 'react-router-dom';
import './shopbycategory.css';

const ShopByCategory = () => {
  const navigate = useNavigate();

  const materials = [
    {
      title: "Cotton",
      description: "Natural, breathable fabric perfect for everyday wear",
      image: require("../../img/cotton.jpg"),
      varieties: ["Egyptian Cotton", "Organic Cotton", "Pima Cotton"],
      link: "/materials/cotton"
    },
    {
      title: "Silk",
      description: "Luxurious natural fiber with elegant drape",
      image: require("../../img/cotton.jpg"),
      varieties: ["Mulberry Silk", "Tussar Silk", "Art Silk"],
      link: "/materials/silk"
    },
    {
      title: "Linen",
      description: "Durable natural fiber with excellent cooling properties",
      image: require("../../img/cotton.jpg"),
      varieties: ["Pure Linen", "Linen Blend", "Handwoven Linen"],
      link: "/materials/linen"
    },
    {
      title: "Wool",
      description: "Warm and versatile natural fiber",
      image: require("../../img/cotton.jpg"),
      varieties: ["Merino Wool", "Cashmere", "Pashmina"],
      link: "/materials/wool"
    },
    {
      title: "Synthetic Fabrics",
      description: "Durable and easy-care modern materials",
      image: require("../../img/cotton.jpg"),
      varieties: ["Polyester", "Nylon", "Rayon"],
      link: "/materials/synthetic"
    },
    {
      title: "Blended Fabrics",
      description: "Perfect combination of natural and synthetic fibers",
      image: require("../../img/cotton.jpg"),
      varieties: ["Cotton-Polyester", "Silk-Cotton", "Wool-Synthetic"],
      link: "/materials/blended"
    }
  ];

  return (
    <div className="page-container">
      <div className="materials-category-container">
        <h2>shop by categories</h2>
        <div className="materials-grid">
          {materials.map((material, index) => (
            <div 
              key={index} 
              className="material-card"
              onClick={() => navigate(material.link)}
            >
              <div className="material-image">
                <img src={material.image} alt={material.title} />
              </div>
              <div className="material-content">
                <h3>{material.title}</h3>
                <p className="material-description">{material.description}</p>
                <div className="material-varieties">
                  {material.varieties.map((variety, idx) => (
                    <span key={idx} className="variety-tag">{variety}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;