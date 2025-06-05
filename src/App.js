import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Products from './pages/home/products/products';
import OrganicProductsPage from './pages/Organicproducts/homeorganic'; // Import the new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add a route for the new Organic Products page */}
        <Route path="/organic-products" element={<OrganicProductsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/products/:category/:type" element={<Products />} />
         
      </Routes>
    </Router>
  );
}

export default App;
