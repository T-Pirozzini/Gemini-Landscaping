import React from 'react'
import './Navbar.css'
import GeminiLogo from '../images/gemini-logo.png'

const handleClick = () => {
  document.getElementById('footer').scrollIntoView({behavior: "smooth"});
}

export default function Navbar() {
  return (
    <div className='navMain'>      
      <div><img src={GeminiLogo} className="logo" alt="gemini-logo" /></div>
      <div><span>ABOUT</span></div>
      <div><span onClick={handleClick}>SERVICES</span></div>
      <div><span>CONTACT</span></div>
    </div>
  )
}
