import React, { useState } from 'react';


function Navbar( { hero_nav} ) {
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuClick = () => {
    setIsMobile(!isMobile);
  };

  return (
  <div className='nav-bg'>
    <nav className="Navbar max-w">
      
        <div className="Navbar-logo">
          <img src="logo-w.svg" alt="" />
        </div>
        <div className={`Navbar-menu ${isMobile ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className='empty-box'></div>
        <div className={`Navbar-toggle ${isMobile ? 'active' : ''}`} onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
    
  );
}

export default Navbar;

