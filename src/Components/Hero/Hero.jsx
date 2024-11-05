import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our cuttlng-edge curriculum IS designed to empower students 
            with the knowledge, skills, and experiences needed to excel in 
            the dynamic field of education</p>
            <button className='btn'><Link to='about' smooth={true} offset={-150} duration={500}>Explore More <img src={dark_arrow} alt="" /></Link></button>
        </div>
    </div>
  )
}

export default Hero