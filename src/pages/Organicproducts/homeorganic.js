import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './homeorganic.css'; // Import the CSS for this page
import TransparentNavbar from '../../components/TransparentNavbar'; // Adjust path if necessary


const OrganicProductsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const organicProductsData = [
    {
      id: 1,
      name: "Organic Cotton Fabric",
      description: "100% pure, natural, and sustainable cotton fabric.",
      image: require("../../img/pure cotton.jpg"),
    },
    {
      id: 2,
      name: "Organic Linen Fabric",
      description: "Breathable and eco-friendly linen, perfect for summer wear.",
      image: require("../../img/purecottonsarees.jpg"),
    },
    {
      id: 3,
      name: "Organic Jute Fabric",
      description: "Durable and versatile jute, ideal for home decor and accessories.",
      image: require("../../img/jute.jpeg"),
    },
    {
      id: 4,
      name: "Organic Silk Fabric",
      description: "Luxurious and soft silk, naturally dyed and ethically sourced.",
      image: require("../../img/desicotton.jpg"),
    },
    {
      id: 5,
      name: "Organic Hemp Fabric",
      description: "Strong and durable hemp fabric, environmentally friendly.",
      image: require("../../img/spring.jpg"),
    },
    {
      id: 6,
      name: "Organic Wool Fabric",
      description: "Soft and warm organic wool, perfect for sustainable clothing.",
      image: require("../../img/winter.jpg"),
    },
  ];

  return (
    <div className="organic-products-page">
      <TransparentNavbar />
      <p className="page-description">{t('organicProducts.pageDescription')}</p>
      <div className="organic-products-grid">
        {organicProductsData.map((product) => (
          <div key={product.id} className="organic-product-card" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="organic-product-image">
              <img src={product.image} alt={t(product.name)} />
            </div>
            <div className="organic-product-details">
              <h3>{t(product.name)}</h3>
              <p>{t(product.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrganicProductsPage;