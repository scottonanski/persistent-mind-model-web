import React, { useState } from "react";
import { SquareMenu, X } from 'lucide-react';
import { SquareX } from 'lucide-react';
import SystemTelemetry from "./SystemTelemetry";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: ">_ github", href: "#dashboard" },
    { label: ">_ documentation", href: "#memory" },
  ];

  return (
    <>
      {/* Header */}
      <header className={`header ${isMobileMenuOpen ? 'open' : ''}`}>
        {/* Wrapper */}
        <div className="wrapper">
    
          <nav className="desktop-nav">
            <h2 className="logo">Persistent Mind Model
            <span className="version">v1.0</span>
            </h2>
              <div className="menu-items">
              <a>readme</a>
              <a>documentation</a>
              <a>github</a>
              </div>           
          </nav>
          <nav className="mobile-nav" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <SquareX strokeWidth={1} absoluteStrokeWidth />
            ) : (
              <SquareMenu strokeWidth={1} absoluteStrokeWidth />
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      
        <div className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
    </>
  );
};

export default Header;