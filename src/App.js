import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Categories from "./pages/allcategories/categories";
import MensWears from "./pages/allcategories/MensWears";
import WomensWears from "./pages/allcategories/WomensWears";
import KidsWears from "./pages/allcategories/KidsWears";
import Blankets from "./pages/allcategories/Blankets";
import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories/mens-wears" element={<MensWears />} />
      <Route path="/categories/womens-wears" element={<WomensWears />} />
      <Route path="/categories/kids-wears" element={<KidsWears />} />
      <Route path="/categories/blankets" element={<Blankets />} />
    </Routes>
  </Router>
);

export default App;
