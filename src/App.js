import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrganicProductsPage from './pages/Organicproducts/homeorganic';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'; // Import your new page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/organic-products" element={<OrganicProductsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} /> {/* Add route for new page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
