// Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
      <li style={liStyles}>
          <a style={linkStyles} href="/home">Home</a>
     </li>
     <li
          style={liStyles}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <a style={linkStyles} href="/aboutme">About Us</a>
          {isDropdownOpen && (
            <ul style={dropdownStyles}>
              <li>
                <a style={dropdownLinkStyles} href="/blogs">Learn About Health</a>
              </li>
              
            </ul>
          )}
        </li>
        <li
          style={liStyles}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <a style={linkStyles} href="/products">Products</a>
          {isDropdownOpen && (
            <ul style={dropdownStyles}>
              <li>
                <a style={dropdownLinkStyles} href="/product-collection/bulkingcollection">Bulking Collection</a>
              </li>
              
            </ul>
          )}
        </li>

        <li style={liStyles}>
          <a style={linkStyles} href="/faq">FAQ</a>
        </li>

        <li style={liStyles}>
          <a style={linkStyles} href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

// Inline styles (unchanged)
const navStyles = {
  backgroundColor: 'lightgray',
  padding: '10px',
  position: 'fixed',
  top: '0',
  width: '100%',
};

const ulStyles = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const liStyles = {
  margin: '0 10px',
  position: 'relative',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
};

const dropdownStyles = {
  listStyle: 'none',
  backgroundColor: 'white',
  position: 'absolute',
  top: '100%',
  left: '0',
  padding: '10px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const dropdownLinkStyles = {
  textDecoration: 'none',
  color: 'black',
};

export default Navbar;
