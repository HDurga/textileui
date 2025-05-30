import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './shopbycategory.css';

const ShopByCategory = () => {
  const navigate = useNavigate();
  const { t ,i18n} = useTranslation();

  const materials = [
    
    {
      title: t("materials.cotton"),
      description: t("materials.cotton_description"),
      image: require("../../img/printedcottonfabrics.jpg"),
      link: "/materials/cotton"
    },
    {
      title: t("materials.silk"),
      description: t("materials.silk_description"),
      image: '/ikatsarees.jpg',
      link: "/materials/silk"
    },
    {
      title: t("materials.linen"),
      description: t("materials.linen_description"),
      image: '/ikatsarees.jpg',
      link: "/materials/linen"
    },
    {
      title: t("materials.wool"),
      description: t("materials.wool_description"),
      image: require("../../img/temple  sarees.jpg"),
      link: "/materials/wool"
    },
    {
      title: t("materials.synthetic_fabrics"),
      description: t("materials.synthetic_description"),
      image: require("../../img/jute.jpeg"),
      link: "/materials/synthetic"
    },
    {
      title: t("materials.blended_fabrics"),
      description: t("materials.blended_description"),
      image: '/uppadajam.jpg',
      link: "/materials/blended",
    }
  ];

  return (
    <div className="page-container">
      <div className="materials-category-container">
        <h2>{t("categories.shop_by_categories")}</h2>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;