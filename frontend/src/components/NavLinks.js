import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import '../styles/Navbar.css';

const NavLinks = () => {
  return (
    <nav className="navbar">
      
      <ul className="navbar-links">
        <li><Link to="/"><FaHome /></Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/tutorials">Tutorials</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default NavLinks;
