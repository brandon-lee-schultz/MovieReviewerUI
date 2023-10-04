import React, { useState } from 'react';
import './navbar.css';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-item">Movies</div>
          <div className="menu-item">Reviews</div>
          <div className="separator"></div>
          <div className="menu-item">Log out</div>
        </div>
      )}
    </div>
  );
};
