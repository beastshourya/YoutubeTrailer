// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo-text">
                    YouTube Trailers
                </Link>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">
                    Home
                </Link>
                <Link to="/about" className="nav-link">
                    About Us
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact Us
                </Link>
            </nav>
        </header>
    );
}

export default Header;
