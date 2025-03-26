import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import '../styles/Navbar.css';
import NavLinks from './NavLinks'

const DesktopNav = () => {
  return (
    <nav className="DesktopNav navbar">
      {/* <div className="navbar-brand">
        <Link to="/">Sadie Flick</Link>
      </div> */}
      
      <NavLinks/>
    </nav>
  );
}

export default DesktopNav;
