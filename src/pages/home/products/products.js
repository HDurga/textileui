import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import './products.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const { category, type } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || 'fabrics');
  const [selectedType, setSelectedType] = useState(type || null);
  const { t } = useTranslation();

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
    if (type) {
      setSelectedType(type);
    }
  }, [category, type]);

  const productCategories = {
    fabrics: {
      title: "Fabrics",
      types: [
        {
          name: "Cotton",
          description: "Natural and breathable cotton fabrics",
          varieties: ["Handloom Cotton", "Organic Cotton", "Blended Cotton"],
          image: '/cotton.j.jpg',
        },
        {
          name: "Silk",
          description: "Luxurious and elegant silk varieties",
          varieties: ["Pure Silk", "Raw Silk", "Art Silk"],
          image: '/uppadajam.jpg',
        },
        {
          name: "Wool",
          description: "Warm and cozy wool fabrics",
          varieties: ["Merino Wool", "Cashmere", "Tweed"],
          image: '/treecotton.jpg',
        }
      ]
    },
    laces: {
      title: "Laces",
      types: [
        {
          name: "Traditional",
          description: "Classic lace designs",
          varieties: ["Cotton Lace", "Silk Lace", "Crochet Lace"],
          image: '/desginercotton.jpg',
        },
        {
          name: "Modern",
          description: "Contemporary lace patterns",
          varieties: ["Synthetic Lace", "Embroidered Lace", "Metallic Lace"],
          image: "/seasonal.jpg",
        }
      ]
    },
    sarees: {
      title: "Sarees",
      types: [
        {
          name: "Traditional",
          description: "Classic saree collections",
          varieties: ["Handloom", "Ikat", "Temple", "Banarasi"],

          image: '/sarees.jpg',
        },
        {
          name: "Modern",
          description: "Contemporary saree designs",
          varieties: ["Designer", "Fusion", "Printed"],
          image: '/ikatsarees.jpg',
        }
      ]
    },
    carpets: {
      title: "Carpets",
      types: [
        {
          name: "Traditional",
          description: "Classic carpet designs",
          varieties: ["Persian", "Turkish", "Indian"],
          image: "/images/carpets/traditional.jpg"
        },
        {
          name: "Modern",
          description: "Contemporary carpet styles",
          varieties: ["Contemporary", "Industrial", "Eco-friendly"],
          image: "/images/carpets/modern.jpg"
        }
      ]
    }
  };

  return (
    <div className="products-container">
      <div className="category-navigation">
        {Object.entries(productCategories).map(([key, category]) => (
          <div 
            key={key}
            className={`category-tab ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(key);
              navigate(`/products/${key}`);
            }}
          >
            {category.title}
          </div>
        ))}
      </div>

      <div className="category-content">
        <h2>{productCategories[selectedCategory].title}</h2>
        <div className="types-grid">
          {productCategories[selectedCategory].types.map((type, index) => (
            <div key={index} className="type-card">
              <div className="type-image">
                <img src={type.image} alt={type.name} />
              </div>
              <div className="type-info">
                <h3>{type.name}</h3>
                <p>{type.description}</p>
                <div className="varieties-list">
                  {type.varieties.map((variety, i) => (
                    <span key={i} className="variety-tag">{variety}</span>
                  ))}
                </div>
                <button className="explore-btn">Explore →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;