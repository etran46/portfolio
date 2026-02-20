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
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="logo">Portfolio</div>
        <ul id="nav-menu" className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
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
        <button
          type="button"
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

