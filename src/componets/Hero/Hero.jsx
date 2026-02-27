import React from "react";
import Navbar from "../Navbar/Navbar";
import Boids from "../Boids/Boids";

const clients = [
  { name: 'Message24', logo: '/assets/logos/message24.png' },
  { name: 'Toyota Iraq', logo: '/assets/logos/toyota.svg' },
  { name: 'Furatpay', logo: '/assets/logos/furatpay.png' },
  { name: 'Frobel', logo: '/assets/logos/frobel.svg' },
  { name: 'Pepu', logo: '/assets/logos/pepu.svg' },
  { name: 'Connected MENA', logo: '/assets/logos/connectedmena.svg' }
];

const Hero = () => {
  return (
    <div className="Hero_cont">
      <Boids count={45} />
      <Navbar />

      <div className="max-w">
        <div className="hero-content">
          <h1 className="hero-main-title">
            Build, Scale, and<br />
            <span className="hero-accent">Transform</span> Your Business
          </h1>

          <p className="hero-description">
            We combine creative design with cutting-edge technology to build
            innovative digital solutions that help businesses grow and succeed.
          </p>

          <div className="hero-cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Start Your Project
            </a>
            <a href="#products" className="btn btn-secondary">
              View Our Work
            </a>
          </div>

          <div className="hero-badges">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#1ED07C" fillOpacity="0.15"/><path d="M5 8l2 2 4-4" stroke="#1ED07C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>User-Centered Design</span>
            </div>
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#1ED07C" fillOpacity="0.15"/><path d="M5 8l2 2 4-4" stroke="#1ED07C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Modern Technologies</span>
            </div>
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="#1ED07C" fillOpacity="0.15"/><path d="M5 8l2 2 4-4" stroke="#1ED07C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Results-Driven</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-clients">
        <p className="hero-clients-label">Trusted By</p>
        <div className="hero-clients-strip">
          {clients.map((client, index) => (
            <div key={index} className="hero-client-logo-wrapper">
              <img
                src={client.logo}
                alt={client.name}
                className={`hero-client-logo ${client.name === 'Pepu' ? 'hero-client-logo--pepu' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Hero;
