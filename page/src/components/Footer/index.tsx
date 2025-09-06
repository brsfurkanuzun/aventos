import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="logo-container">
          <Link to="/">
            <img src="/dark.svg" alt="Aventos Logo" className="logo" />
          </Link>
        </div>
        <ul>
          <h1>Quick Links</h1>
          <li className="menu-item">
            <Link to="/" className="menu-item">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/works" className="menu-item">
              Works
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/about" className="menu-item">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/Contact" className="menu-item">
              Contact
            </Link>
          </li>
        </ul>
        <ul>
          <h1>Social Links</h1>
          <li className="menu-item">Linkedin</li>
          <li className="menu-item">Instagram</li>
          <li className="menu-item">X</li>
        </ul>
      </div>
      <div className="rights">Aventos 360 ° | All rights reserved. 2025.</div>
    </div>
  );
}

export default Footer;
