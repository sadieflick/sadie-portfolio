import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import '../styles/Navbar.css';
import {MdOutlineMenu} from 'react-icons/md'
import Navbar from './Navbar';
import NavLinks from './NavLinks';

const Hamburger = <MdOutlineMenu className="HamburgerMenu"
            size="30px" color="black"/>
const MobileNav = () => {
  return (
    <nav className="MobileNav">
            {Hamburger}
            <NavLinks />                         
    </nav>
  );
}

export default MobileNav;
