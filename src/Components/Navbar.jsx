import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../photos/Logo.jpeg';
import './Navbar.css';
import '../App.css';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={handleToggle}>
        {navOpen ? <FaTimes className="text-white" /> : <FaBars className="text-black" />}
      </div>
      <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
        <li><Link to="home" smooth={true} duration={500} onClick={handleToggle}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={handleToggle}>About</Link></li>
        <li><Link to="services" smooth={true} duration={500} onClick={handleToggle}>Services</Link></li>
        <li><Link to="solutions" smooth={true} duration={500} onClick={handleToggle}>Solutions</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={handleToggle}>Contact Us</Link></li>
      </ul>
      <button className="call-button">Call Us</button>
    </nav>
  );
}

export default Navbar;
