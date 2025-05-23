import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './products.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t, i18n } = useTranslation();

  const productCategories = [
    {
      category: "Cotton",
      products: [
        {
          id: 1,
          nameKey: "products.cotton.upland.name",
          descriptionKey: "products.cotton.upland.description",
          detailsKey: "products.cotton.upland.details",
          type: "Upland Cotton",
          image: "/images/cotton.jpg",
        },
        {
          id: 2,
          nameKey: "products.cotton.desi.name",
          descriptionKey: "products.cotton.desi.description",
          detailsKey: "products.cotton.desi.details",
          type: "Desi Cotton",
          image: "/images/",
        },
        {
          id: 3,
          nameKey: "products.cotton.egyptian.name",
          descriptionKey: "products.cotton.egyptian.description",
          detailsKey: "products.cotton.egyptian.details",
          type: "Egyptian/EIL Cotton",
        image:  "/images/cotton.jpg",
        },
        {
          id: 4,
          nameKey: "products.cotton.tree.name",
          descriptionKey: "products.cotton.tree.description",
          detailsKey: "products.cotton.tree.details",
          type: "Tree Cotton",
          subtitle: "(Least grown)",
           image :  "/images/cotton.jpg",
        }
      ]
    },
    {
      category: "Laces",
      products: [
        {
          id: 3,
          nameKey: "products.lace.name",
          descriptionKey: "products.lace.description",
          detailsKey: "products",
          image: "/images/fabrics/lace-category.jpg"  // Updated image path
        }
      ]
    },
    {
      category: "Sarees",
      products: [
        {
          id: 4,
          nameKey: "products.saree.name",
          descriptionKey: "products.saree.description",
          detailsKey: "products.saree.details",
          image: "/images/fabrics/saree-category.jpg"  // Updated image path
        }
      ]
    },
    {
      category: "Carpets",
      products: [
        {
          id: 5,
          nameKey: "products.carpet.name",
          descriptionKey: "products.carpet.description",
          detailsKey: "products.carpet.details",
          price: "₹4,999",
          image: "/images/fabrics/carpet-category.jpg"  // Updated image path
        }
      ]
    }
  ];

  return (
    <div className="products-page">
      <h2 className="section-title">Explore Our Fabric Categories</h2>
      <div className="fabric-grid">
        {productCategories.map(category => (
          <div key={category.category} 
               className="fabric-card" 
               onClick={() => setSelectedCategory(category.category)}>
            <div className="fabric-image">
              <img src={category.products[0].image} alt={category.category} />
            </div>
            <div className="fabric-info">
              <h3>{category.category}</h3>
              <button className="explore-btn">Explore →</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCategory === "Cotton" && (
        <div className="cotton-types-section">
          <h3>Types of Cotton</h3>
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              }
            ]}
          >
            {productCategories[0].products.map(cotton => (
              <div key={cotton.id} className="cotton-card">
                <div className="cotton-image">
                  <img src={cotton.image} alt={t(cotton.nameKey)} />
                </div>
                <div className="cotton-info">
                  <h4>{cotton.type}</h4>
                  {cotton.subtitle && <span className="subtitle">{cotton.subtitle}</span>}
                  <p>{t(cotton.descriptionKey)}</p>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Products;