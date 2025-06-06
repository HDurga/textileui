import React from 'react';
import './TransparentNavbar.css';

function TransparentNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.svg" alt="Logo" className="navbar-logo-img" /> 
         </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." className="search-bar" />
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

export default TransparentNavbar;