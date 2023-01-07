import React from 'react'
import logo from '../assets/logo_black.png'

export default function Footer() {
  return (
    <footer>
        <div className='footer-links'>
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#our-work">OUR WORK</a>
        </div>
        <div className="footer--info-container">
            <div className='footer--contact-info'>
                <a href="tel:+18182175121">+1(818)217-5121</a>
                <a href="mailto:loskutech@gmail.com">loskutech@gmail.com</a>
            </div>
            <img src={logo} alt="loskutech logo" />
        </div>
    </footer>
  )
}
