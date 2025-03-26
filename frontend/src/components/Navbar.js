import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import '../styles/Navbar.css';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
const Navbar = () => {
  return (
    <div>
            <DesktopNav />
            <MobileNav />
        </div>
  );
}

export default Navbar;
