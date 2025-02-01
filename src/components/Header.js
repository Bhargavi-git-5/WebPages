import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  const handleSectionClick = (sectionName) => {
    alert(`You clicked on ${sectionName}.If you want to open click OK to read the page`);
    
  };

  return (
    <header className="header">
      <h1>Weboasis</h1>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#section1" onClick={() => handleSectionClick('Section 1')}>
          Section1
        </a>
        <a href="#section2" onClick={() => handleSectionClick('Section 2')}>
          Section2
        </a>
        <a href="#section3" onClick={() => handleSectionClick('Section 3')}>
          Section3
        </a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
