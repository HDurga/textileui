import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Categories from "./pages/allcategories/categories";
import CategoryDetail from "./pages/categoryDetail/categoryDetail";
import FabricsCategory from "./pages/categoryDetail/fabricsCategory";
import "./App.css";

// Define the categories data
const categoriesData = [
  {
    title: "Fabrics",
    image: require("./img/fabrics.jpg"),
    description: "Premium quality fabrics for all your needs",
    items: ["Cotton", "Silk", "Wool", "Synthetic", "Linen", "Denim"],
    details: "Our fabric collection features a wide range of high-quality materials sourced from the finest mills around the world."
  },
  {
    title: "Laces",
    image: require("./img/laces.jpg"),
    description: "Elegant laces for decorative and fashion purposes",
    items: ["Chantilly Lace", "Guipure Lace", "Venice Lace", "Cotton Lace", "Embroidered Lace"],
    details: "Our exquisite lace collection showcases intricate patterns and delicate craftsmanship."
  },
  {
    title: "Sarees",
    image: require("./img/sarees.jpg"),
    description: "Traditional and modern sarees for every occasion",
    items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees", "Banarasi Sarees", "Handloom Sarees"],
    details: "Discover our stunning collection of sarees that blend traditional craftsmanship with contemporary designs."
  },
  {
    title: "Carpets",
    image: require("./img/carpets.jpg"),
    description: "Luxurious carpets and rugs for your home",
    items: ["Persian Carpets", "Modern Rugs", "Traditional Carpets", "Area Rugs", "Designer Carpets"],
    details: "Our carpet collection features handcrafted pieces that combine traditional techniques with modern aesthetics."
  }
];

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories categoryData={categoriesData} />} />
      {/* Commented out to remove access to /categories/fabrics */}
      {/* <Route path="/categories/:categoryName" element={<CategoryDetail categoryData={categoriesData} />} /> */}
      <Route path="/fabrics" element={<FabricsCategory />} />
    </Routes>
  </Router>
);

export default App;
