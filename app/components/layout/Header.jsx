import React, { useState } from "react";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        {/* Branding */}
        <a className="navbar-brand text-light fw-bold" href="/">
          Oritude
        </a>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <a className="nav-link text-light" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/story">Our Story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/products">Products</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;