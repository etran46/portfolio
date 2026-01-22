import React from 'react';

const Footer = () => {
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
  };

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2026 Elijah Tran. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

