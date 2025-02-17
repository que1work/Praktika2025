import React from 'react';
import '../App.css';

const Header = () => {
    return (
        <header className="header">
            <h3 className="logo">{'{Finsweet'}</h3>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="/contact" className="btn">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
