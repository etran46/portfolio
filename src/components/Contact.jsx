import React, { useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!EMAIL_REGEX.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validate('name', formData.name),
      email: validate('email', formData.email),
      message: validate('message', formData.message)
    };
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your visions.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>elijahtran98118@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div>
                <h3>LinkedIn</h3>
                <p className="contact-link" onClick={() => window.open('https://www.linkedin.com/in/elijahtran26/', '_blank')}>
                https://www.linkedin.com/in/elijahtran26/</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div>
                <h3>GitHub</h3>
                <p className="contact-link" onClick={() => window.open('https://github.com/etran46', '_blank')}>
                https://github.com/etran46</p>
              </div>
            </div>  
            <div className="contact-item">
              <div className="contact-icon">📄</div>
              <div>
                <h3>Resume</h3>
                <a
                  className="contact-link"
                  href="/img/Resume.pdf"
                  download="Elijah_Tran_Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            {submitted && (
              <div className="form-success" role="status" aria-live="polite">
                Thank you for your message! I&apos;ll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="contact-name" className="visually-hidden">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="form-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="visually-hidden">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="visually-hidden">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              ></textarea>
              {errors.message && (
                <span id="message-error" className="form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary" aria-label="Submit contact form">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

