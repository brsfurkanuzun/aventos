import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import GlassSurface from "../GlassSurface";

function Header() {
  return (
    <div className="header-container">
      <GlassSurface
        width={1200}
        height={60}
        borderRadius={50}
        className="glass-container"
      >
        <div className="header-bar">
          <Link to="/" className="menu-item">
            <img src="/dark.svg" alt="Aventos Logo" className="logo" />
          </Link>
          <ul className="menu-items-container">
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
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </GlassSurface>
    </div>
  );
}

export default Header;
