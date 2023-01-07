import React, {useState, useRef, useEffect} from 'react'
import logoWhite from '../assets/logo_white.png'
import AOS from 'aos'

function Navbar() {
const [open, setOpen] = useState(false)
const mobileMenu = useRef(null)
const menuBtn = useRef(null)

useEffect(() => {
  AOS.init();
}, [])

const openMenu = (e) => {
  setOpen(!open)
  if(open === true) {
   mobileMenu.current.style.display = 'flex'
   menuBtn.current.style.display = 'block'
   menuBtn.current.style.color = 'black'
   document.body.style.overflow = 'hidden'
  } else {
    mobileMenu.current.style.display = 'none'
    menuBtn.current.style.display = 'none'
    document.body.style.overflow = 'auto'

  }
}

  return (
    <nav className='navbar'>
      <div className='logo--container'>
        <img src={logoWhite} alt="" />
        <p>LOSKUTECH</p>
      </div>
        <div onClick={openMenu}  className='mobile-nav--btn'><span ref={menuBtn}>CLOSE</span> MENU</div>
      <div className='mobile-navlinks--container' ref={mobileMenu}>
        <a href="#home" onClick={openMenu} >HOME</a>
        <a href="#about" onClick={openMenu}>ABOUT</a>
        <a href="#services" onClick={openMenu}>SERVICES</a>
        <a href="#our-work" onClick={openMenu}>OUR WORK</a>
        <a href="#contact" onClick={openMenu}>CONTACT US</a>
      </div>
      <div className='navlinks--container'>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#services">SERVICES</a>
        <a href="#our-work">OUR WORK</a>
        <a href="#contact">CONTACT US</a>
      </div>
    </nav>
  )
}

export default Navbar