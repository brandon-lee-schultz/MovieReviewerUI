import React, { useState } from 'react';
import './Navbar.css';

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
          <div className="menu-item"><a href="/movies">Movies</a></div>
          <div className="menu-item"><a href="/reviews">Reviews</a></div>
          <div className="separator"></div>
          <div className="menu-item"><a href="/logout">Log out</a></div>
        </div>
      )}
    </div>
  );
};
