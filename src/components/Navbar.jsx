import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Portfolio</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" className="nav-link" onClick={(e) => handleScroll(e, '#home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link" onClick={(e) => handleScroll(e, '#about')}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link" onClick={(e) => handleScroll(e, '#skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-link" onClick={(e) => handleScroll(e, '#projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link" onClick={(e) => handleScroll(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
        <div 
          className="hamburger" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

