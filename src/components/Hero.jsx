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
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-heading" className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="name">Elijah Tran</span>
            <span className="role">Full Stack Developer</span>
            <span className="specialization">Data-driven applications & user-centered design</span>
          </h1>
          <p className="hero-description">
            I build applications that turn data into decisions and solve real problems—from 
            streamlining workflows to creating intuitive interfaces users actually enjoy.
          </p>
          <p className="hero-outcome">
            Informatics graduate focused on human-computer interaction and full-stack development.
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, '#projects')}
              aria-label="View technical projects"
            >
              View Technical Projects
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleScroll(e, '#contact')}
              aria-label="Get in touch via contact form"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/img/gradpic.png"
            alt="Elijah Tran, Informatics graduate and Full Stack Developer"
            className="hero-image-img"
            onClick={() => window.open('https://www.linkedin.com/in/elijahtran26/', '_blank')}
            onKeyDown={(e) => e.key === 'Enter' && window.open('https://www.linkedin.com/in/elijahtran26/', '_blank')}
            tabIndex={0}
            role="button"
            aria-label="Open Elijah Tran's LinkedIn profile in a new tab"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;

