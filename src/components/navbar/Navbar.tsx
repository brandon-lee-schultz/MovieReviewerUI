// Import the 'useState' hook from React.
import { useState } from 'react';

// Import the CSS file for styling.
import './navbar.css';

// Create the 'Navbar' component.
export function Navbar(): JSX.Element {
  // Define a state variable 'isMenuOpen' and a function 'setIsMenuOpen' to toggle the menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu's open/close state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Define an array of menu items, each with a 'text' and 'link' property.
  const menuItems = [
    { text: 'Movies', link: '/movies' },
    { text: 'Reviews', link: '/reviews' },
  ];

  return (
    <div className="navbar"> {/* Container for the entire navigation bar */}
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Menu icon that triggers the menu toggle on click */}
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {isMenuOpen && ( // Conditionally render the menu when 'isMenuOpen' is true
        <div className="menu"> {/* The menu container */}
          {menuItems.map((item, index) => (
            <div className="menu-item" key={index}>
              {/* Map through the 'menuItems' array and render each menu item */}
              <a href={item.link}>{item.text}</a>
            </div>
          ))}
          {/* Separator line between menu items */}
          <div className="separator"></div>

          {/* Menu item with a link to 'Log out' */}
          <div className="menu-item"><a href="/logout">Log out</a></div>
        </div>
      )}
    </div>
  );
}
