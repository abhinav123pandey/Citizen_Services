import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold text-gradient" to="/">
          Citizen Services
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link text-white" to="/" onClick={handleNavCollapse}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" onClick={handleNavCollapse}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact" onClick={handleNavCollapse}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/schemes" onClick={handleNavCollapse}>
                Schemes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/scholarships" onClick={handleNavCollapse}>
                Scholarships
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/hackathons" onClick={handleNavCollapse}>
                Hackathons
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
