import React from 'react'
import GeminiLogo from '../images/gemini-icon-transparent.png'
// import VanIsle from '../images/lesly-derksen.jpg'
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";
import './Navbar.css'

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
    <nav className="navbar sticky top-0 z-10 shadow-lg p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="logo flex items-center">
            <img src={GeminiLogo} alt="Logo" className="w-32 h-32" />
            <h1 id='title' className="text-4xl font-bold pl-4">Gemini Landscaping</h1>
          </div>

          {/* Navigation Items */}
          <ul className="flex space-x-6">
            <li className="nav-item text-xl">About us</li>
            <li className="nav-item text-xl">Services</li>
            <li className="nav-item text-xl">Showcase</li>
            <li className="nav-item text-xl">Contact us</li>
          </ul>

          {/* Social Media Icons */}
          <ul className="flex space-x-4">
            <li className="social-icon">
              <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            <li className="social-icon">
              <a href="mailto:your@email.com">
                <FaEnvelope alt="Email" className="w-6 h-6" />
              </a>
            </li>
            <li className="social-icon">
              <a href="tel:+1234567890">
                <FaPhone alt="Phone" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
