import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { t, i18n } = useTranslation();

  const products = [
    {
      id: 1,
      nameKey: "products.cotton.name",
      descriptionKey: "products.cotton.description",
      detailsKey: "products.cotton.details",
      image: "/images/cotton.jpg"  // Changed from require()
    },
    {
      id: 2,
      nameKey: "products.silk.name",
      descriptionKey: "products.silk.description",
      detailsKey: "products.silk.details",
      image: "/images/cotton.jpg" // Changed from require()
    },
    {
      id: 3,
      name: "Linen Fabric",
      description: "Durable linen fabric with natural texture",
      details: "100% pure linen, Breathable and strong, Excellent for summer clothing",
      image: "/images/cotton.jpg"  // Changed from require()
    },
    {
      id: 4,
      name: "Wool Fabric",
      description: "Warm and cozy wool fabric for winter wear",
      details: "Pure wool, Warm and comfortable, Perfect for winter clothing",
      image: "/images/cotton.jpg"  // Changed from require()
    },
    {
      id: 5,
      name: "Synthetic Blend",
      description: "Modern synthetic blend with enhanced durability",
      details: "Polyester-cotton blend, Easy maintenance, Wrinkle-resistant",
      image: "/images/cotton.jpg"  // Changed from require()
    },
    {
      id: 6,
      name: "handlooms fabrics",
      description: "High-quality polyester fabric with a soft, breathable feel",
      details: "100% polyester, Soft and comfortable, Ideal for everyday wear",
      image: "/images/cotton.jpg"  // Changed from require()
    }
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="products-page">
      <div className="language-selector">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('te')}>తెలుగు</button>
        <button onClick={() => changeLanguage('hi')}>हिंदी</button>
      </div>
      <div className="products-container">
        <div className="products-list">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`product-item ${selectedProduct?.id === product.id ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(product)}
            >
              <h3>{t(product.nameKey)}</h3>
              <p>{t(product.descriptionKey)}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="product-details">
          {selectedProduct ? (
            <div className="selected-product">
              <div className="product-image">
                <img src={selectedProduct.image} alt={t(selectedProduct.nameKey)} />
              </div>
              <div className="product-info">
                <h2>{t(selectedProduct.nameKey)}</h2>
                <p className="description">{t(selectedProduct.descriptionKey)}</p>
                <p className="details">{t(selectedProduct.detailsKey)}</p>
                <p className="price">{selectedProduct.price}</p>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>{t('products.select_prompt')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;