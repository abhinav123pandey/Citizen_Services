import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer text-white py-5 position-relative" style={{ background: "#000", overflow: "hidden" }}>
      {/* Pentagon Background Shapes */}
      <div className="pentagon-container">
        <div className="pentagon pentagon-1"></div>
        <div className="pentagon pentagon-2"></div>
        <div className="pentagon pentagon-3"></div>
      </div>
      
      <div className="container text-center position-relative" style={{ zIndex: 2 }}>
        {/* Scrolling Text (Marquee Effect) */}
        <div className="mb-3">
          <marquee behavior="scroll" direction="left" scrollamount="6" className="fw-bold text-warning">
            Stay updated with the latest government schemes, scholarships, and hackathons!
          </marquee>
        </div>

        {/* Navigation Links */}
        <div className="row mb-3">
          <div className="col-md-12 d-flex justify-content-center gap-4 flex-wrap">
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/">Home</Link>
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/about">About</Link>
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/contact">Contact</Link>
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/schemes">Schemes</Link>
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/scholarships">Scholarships</Link>
            <Link className="text-white text-decoration-none fw-semibold neon-hover" to="/hackathons">Hackathons</Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mb-3 d-flex justify-content-center gap-3">
          <a href="#" className="text-white neon-hover" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white neon-hover" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white neon-hover" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-white neon-hover" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Info */}
        <p className="mb-0 fw-light text-muted">&copy; {new Date().getFullYear()} Citizen Services. All rights reserved.</p>
      </div>
      
      {/* Custom CSS for Effects */}
      <style>
        {`
          .neon-hover:hover {
            color: #FFD700;
            text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700;
            transition: all 0.3s;
          }

          .pentagon-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .pentagon {
            position: absolute;
            width: 150px;
            height: 150px;
            background: rgba(255, 255, 255, 0.1);
            clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
          }

          .pentagon-1 {
            top: 10%;
            left: 10%;
            transform: rotate(15deg);
          }
          .pentagon-2 {
            top: 50%;
            right: 10%;
            transform: rotate(-20deg);
          }
          .pentagon-3 {
            bottom: 10%;
            left: 50%;
            transform: rotate(10deg);
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;