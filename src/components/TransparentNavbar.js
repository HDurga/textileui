import React from 'react';
import './TransparentNavbar.css';

function TransparentNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Replace with your actual logo image */}
        <img src="/logo.svg" alt="Logo" className="navbar-logo-img" /> 
        <div className="navbar-logo">TextileUI</div>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#login">Login</a> {/* Added Login link */}
        <input type="text" placeholder="Search..." className="search-bar" /> {/* Added Search Bar */}
      </div>
    </nav>
  );
}

export default TransparentNavbar;