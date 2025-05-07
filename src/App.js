import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Categories from './pages/allcategories/categories';
import Products from './pages/home/products/products';
import ShopByCategory from './pages/shopbycategory/shop by category';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shop-by-category" element={<ShopByCategory />} />
        <Route path="/materials/:type" element={<ShopByCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
