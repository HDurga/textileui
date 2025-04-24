import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Categories from './pages/allcategories/categories';
import Home1 from './pages/home/home1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
    </Router>
  );
}

export default App;
