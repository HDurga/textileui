import React from 'react';
import './products.css';

const NavBar = () => (
  <div className="nav-bar">
    <a href="/">Home</a>
    <a href="products">Products</a>
    <a href="#categories">All Categories</a>
  </div>
);

const ProductStore = () => {
    const products = [
        {
            id: 1,
            name: "Premium Cotton fabric",
            description: "Handcrafted pure cotton saree with traditional designs, perfect for special occasions. Features intricate embroidery and comfortable fabric.",
            image: require("../../img/cottonsaree.jpg")
        },
        {
            id: 2,
            name: "Silk Designer fabric",
            price: "$299.99",
            description: "Luxurious silk dress with modern fusion design. Elegant cut with detailed craftsmanship and premium quality fabric.",
            image: require("../../img/slik.jpeg")
        },
        {
            id: 3,
            name: "Handloom Fabric Set",
            price: "$199.99",
            description: "Authentic handloom fabric set featuring unique patterns. Each piece is carefully woven by skilled artisans.",
            image: require("../../img/handloom.jpg")
        },
        {
            id: 4,
            name: "Linen fabric Collection",
            price: "$149.99",
            description: "Lightweight linen fabric collection with breathable texture. Ideal for summer wear and casual outings.",
            image: require("../../img/linen (1).jpg")
        },
        {
            id:5,
            name: "jute fabric",
            price: "$99.99",
            description: "Eco-friendly jute fabric with natural texture. Perfect for sustainable fashion and home decor.",
            image: require("../../img/jute.jpeg")
        },
        {
            id : 6,
            name:"Ployester fabric",
            price: "$89.99", 
            description: "Durable polyester fabric with vibrant colors. Ideal for activewear and everyday clothing.",
            image: require("../../img/polyester.jpg")
        },
        {
            id: 7,
            name: "Rayon/Viscose fabric",
            price: "$79.99",
            description: "Soft rayon fabric with smooth texture. Suitable for dresses, tops, and other casual wear.",
            image:  require("../../img/viscose.jpg")
        },
    ];

    return (
        <div className="product-container">
            <NavBar />
            
            <div className="hero-section">
                <h1>Our Premium Collection</h1>
                <p>Discover the finest textiles crafted with excellence</p>
            </div>

            <div className="products-wrapper">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="product-info">
                            <h2>{product.name}</h2>
                            <p className="description">{product.description}</p>
                            <div className="price">{product.price}</div>
                            <button className="buy-button">Add to Cart</button>
                        </div>
                        <div className="product-image">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footer">
                <p>&copy; 2025 Textile Store</p>
                <div className="footer-links">
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/terms">Terms of Service</a>
                </div>
            </footer>
        </div>
    );
}

export default ProductStore;
