import React from 'react'
import './Navbar.css'
import GeminiLogo from '../images/gemini-logo.png'

export default function Navbar() {
  return (
    <div className='navMain'>
      <div><span>Home</span></div>
      <div><span>About</span></div>
      <div><img src={GeminiLogo} className="logo" alt="gemini-logo" /></div>
      <div><span onClick="document.getElementById('footer').scrollIntoView();">Services</span></div>
      <div><span>Contact</span></div>
    </div>
  )
}
