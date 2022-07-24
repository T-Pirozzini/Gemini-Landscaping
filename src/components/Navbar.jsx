import React from 'react'
import './Navbar.css'
import GeminiLogo from '../images/gemini-logo.png'

const focusAbout = () => {
  document.querySelector('.about-container').scrollIntoView({block:'center', behavior: "smooth"});
}
const focusServices = () => {
  document.querySelector('.items').scrollIntoView({block:'center', behavior: "smooth"});
}
const focusContact = () => {
  document.querySelector('.contact-container').scrollIntoView({block:'center', behavior: "smooth"});
}

export default function Navbar() {
  return (
    <div className='navMain'>      
      <div><img src={GeminiLogo} className="logo" alt="gemini-logo" /></div>
      <div><span  onClick={focusAbout}>ABOUT</span></div>
      <div><span onClick={focusServices}>SERVICES</span></div>
      <div><span onClick={focusContact}>CONTACT</span></div>
    </div>
  )
}
