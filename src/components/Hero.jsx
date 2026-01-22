import React from 'react';

const Hero = () => {
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
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Elijah Tran</span>
            <span className="role">Full Stack Developer</span>
          </h1>
          <p className="hero-description">
            I craft beautiful, functional, and user-centered digital experiences. 
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => handleScroll(e, '#projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => handleScroll(e, '#contact')}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/img/gradpic.png" 
            alt="Elijah Tran" 
            className="hero-image-img"
            onClick={() => window.open('https://www.linkedin.com/in/elijahtran26/', '_blank')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;

