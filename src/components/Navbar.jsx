import React from 'react'
import './Navbar.css'
import GeminiLogo from '../images/gemini-logo.png'

export default function Navbar() {
  return (
    <div className='navMain'>
      <div>Home</div>
      <div>About</div>
      <div><img src={GeminiLogo} className="logo" alt="gemini-logo" /></div>
      <div>Services</div>
      <div>Contact</div>
    </div>
  )
}
