import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={`nav-bg ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="Navbar max-w">
        <div className="Navbar-logo">
          <img src="/hestalogo-white.svg" alt="Hesta" className="logo-light" />
          <img src="/hestalogo.svg" alt="Hesta" className="logo-dark" />
        </div>
        <div className={`Navbar-menu ${isMobile ? "active" : ""}`}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="nav-booking">
          <div
            className={`Navbar-toggle ${isMobile ? "active" : ""}`}
            onClick={handleMenuClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href="https://calendly.com/aramrafeq/30min" className="btn btn-primary">
            Book A Meeting
          </a>
        </div>
      </nav>
      <div
        className={`nav-overlay ${isMobile ? "active" : ""}`}
        onClick={handleMenuClick}
      />
    </div>
  );
}

export default Navbar;
