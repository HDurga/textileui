// home1.js

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import backgroundVideo from '../../img/fabricsvedio.mp4';
import logo from '../../img/logo.png'; // Adjust path if necessary
import './home1.css';

// NavBar Component
const NavBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    if (lowerSearchTerm.includes('fabric') || lowerSearchTerm.includes('cotton') || 
        lowerSearchTerm.includes('silk') || lowerSearchTerm.includes('wool')) {
      navigate('/products#products-container');
    } else if (lowerSearchTerm.includes('saree') || lowerSearchTerm.includes('carpet') || 
               lowerSearchTerm.includes('lace')) {
      navigate('/categories#categories-container');
    } else {
      navigate('/products');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
        setIsScrolled(true);
      } else {
        document.body.classList.remove('scrolled');
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-barhome">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Company Logo" />
          </div>
          <div className="user-actions">
            <button className="sign-in">Sign In</button>
            <button className="sign-up">Sign Up</button>
          </div>
          <div className="nav-links">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/products')}>Products</button>
            <div className="dropdown">
              <button className="dropbtn" onClick={() => setShowDropdown(!showDropdown)}>
                Categories
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={() => navigate('/categories')}>All Categories</button>
                  <button onClick={() => navigate('/categories')}>Fabrics</button>
                  <button onClick={() => navigate('/categories')}>Laces</button>
                  <button onClick={() => navigate('/categories')}>Sarees</button>
                  <button onClick={() => navigate('/categories')}>Carpets</button>
                </div>
              )}
            </div>
          </div>

          {isScrolled && (
            <div className="header-search-container">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search for fabrics, materials, or designs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                />
                <button onClick={handleSearch}>
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

// Home1 Component
const Home1 = () => {
  return (
    <div className="slideshow bg-video">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />

      <div className="overlay-content">
        <NavBar />
        {/* You can add more overlay content here */}
        <h1>Discover Timeless Textiles</h1>
        <p>Explore heritage fabrics and designs from across India</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Home1;
