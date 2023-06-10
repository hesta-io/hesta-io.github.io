import React, { useState } from "react";

function Navbar({ hero_nav }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="nav-bg">
      <nav className="Navbar max-w">
        <div className="Navbar-logo">
          <img src="logo-w.svg" alt="" />
        </div>
        <div className={`Navbar-menu ${isMobile ? "active" : ""}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
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
          <a href="https://calendly.com/aramrafeq/30min">Book a Meeting</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
