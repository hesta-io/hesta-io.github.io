import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className='footer-inner max-w'>
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="hestalogo-white.svg" alt="Hesta" className="footer-logo" />
            <p className="footer-tagline">
              Your technology solution architect. We build innovative digital solutions.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Our Work</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">Web & Mobile Apps</a></li>
              <li><a href="#services">AI & Data Science</a></li>
              <li><a href="#services">Consultancy</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links footer-contact">
              <li><a href="mailto:info@hesta.io">info@hesta.io</a></li>
              <li>+964 750 766 5935</li>
              <li>+964 750 313 3824</li>
              <li>Erbil, Bakhtyari White Diamond Building, Floor 1, Office 5</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hesta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
