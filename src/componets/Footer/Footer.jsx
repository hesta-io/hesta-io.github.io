import React from 'react'

const Footer = () => {
  return (
    <div className="footer" id='contact'>
      <div className='footer-cont max-w' >
        <div className="footer-upper">
          <div className="up-L">
            <h1>Let's Talk.</h1>
            <a href="#">info@hesta.io</a>
          </div >
          {/* <img className='footer-image' src="logoB.svg" alt="hesta-Logo" /> */}
        </div>

        <div className="footer-down">
          <div className="down-L">We can help you <br /> successfuly complete it.</div>
          <div className="down-R">
            <h1>Contact Us</h1>
            <p>+964 750 766 5935</p>
            <p>+964 750 766 5935</p>
            <p>info@hesta.io</p>
            <p>Erbil, Justice Tower, Floor 1, Office 5</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
