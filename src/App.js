import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Categories from "./pages/allcategories/categories";
import CategoryDetail from "./pages/categoryDetail/categoryDetail";
import "./App.css";

// Define the categories data directly in App.js for now

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories categoryData={categoriesData} />} />
      <Route path="/categories/:categoryName" element={<CategoryDetail categoryData={categoriesData} />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </Router>
);

export default App;
