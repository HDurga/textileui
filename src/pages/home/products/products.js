import React, { useState } from 'react';
import './products.css';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Cotton Fabric",
      description: "Natural, breathable cotton fabric perfect for everyday wear",
      details: "100% pure cotton, Lightweight and comfortable, Ideal for summer wear",
      image: require("../../../img/cotton.jpg")
    },
    {
      id: 2,
      name: "Silk Fabric",
      description: "Luxurious silk fabric with a smooth, glossy finish",
      details: "Pure silk, Rich texture, Perfect for special occasions",
      image: require("../../../img/cotton.jpg")
    },
    {
      id: 3,
      name: "Linen Fabric",
      description: "Durable linen fabric with natural texture",
      details: "100% pure linen, Breathable and strong, Excellent for summer clothing",
      image: require("../../../img/cotton.jpg")
    },
    {
      id: 4,
      name: "Wool Fabric",
      description: "Warm and cozy wool fabric for winter wear",
      details: "Pure wool, Warm and comfortable, Perfect for winter clothing",
      image: require("../../../img/cotton.jpg")
    },
    {
      id: 5,
      name: "Synthetic Blend",
      description: "Modern synthetic blend with enhanced durability",
      details: "Polyester-cotton blend, Easy maintenance, Wrinkle-resistant",
      image: require("../../../img/cotton.jpg")
    }
  ];

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-list">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`product-item ${selectedProduct?.id === product.id ? 'selected' : ''}`}
              onClick={() => setSelectedProduct(product)}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
        
        <div className="product-details">
          {selectedProduct ? (
            <div className="selected-product">
              <div className="product-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="product-info">
                <h2>{selectedProduct.name}</h2>
                <p className="description">{selectedProduct.description}</p>
                <p className="details">{selectedProduct.details}</p>
                <p className="price">{selectedProduct.price}</p>
              </div>
            </div>
          ) : (
            <div className="no-selection">
              <p>Please select a fabric from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;