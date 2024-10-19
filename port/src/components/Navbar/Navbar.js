import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav-bar ${isSticky ? 'sticky' : ''}`}>
            <a href="#"><img src={logo} alt='logo' className='logo'/> <span>Mr.Developer</span></a>
            <ul className={`navbar-list ${menuOpen ? 'active' : ''}`}>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className='nav-connect'>Contact With Me</div>
            <div className='hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>
    );
}

export default Navbar;
