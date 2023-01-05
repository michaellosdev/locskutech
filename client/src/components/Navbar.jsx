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
   menuBtn.current.style.display = 'inline'
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
        <div onClick={openMenu}  className='mobile-nav--btn'><span ref={menuBtn}>CLOSE</span> MENU</div>
      </div>
      <div className='mobile-navlinks--container' ref={mobileMenu}>
        <a href="#" onClick={openMenu} >HOME</a>
        <a href="#" onClick={openMenu}>ABOUT</a>
        <a href="#" onClick={openMenu}>SERVICES</a>
        <a href="#" onClick={openMenu}>OUR WORK</a>
        <a href="#" onClick={openMenu}>CONTACT US</a>
      </div>
      <div className='navlinks--container'>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">OUR WORK</a>
        <a href="#">CONTACT US</a>
      </div>
    </nav>
  )
}

export default Navbar