import React from 'react'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    
    <div className='Hero_cont'>
      <Navbar className='hero-nav'/>
      <div className='radio-cover'></div>
      
      <div className='max-w'><div className='hero-content'>
        <div className='hero-title'>
          <h1>Your Technology </h1>
          <h1>Solution Architect</h1>
        </div>
      
        <div className='hero-content-list'>
            <div className='hero-CLL'>
              <img src="Checkbox.svg" alt="" /><p>Helping You Achieve Your Business Goals</p>
            </div>
            <div className='hero-CLL'>
              <img src="Checkbox.svg" alt="" /><p>Creating Impactful Designs</p>
            </div>
            <div className='hero-CLL'>
              <img src="Checkbox.svg" alt="" /><p>Bold Ideas, Bigger Results</p>
            </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Hero
