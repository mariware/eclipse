import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

function Header_Black() {
    return (
        <header className = "header_black">
            <nav>
                <ul className="links">
                    <li className="reveal"><Link reloadDocument to="/eclipse/the_sun"> The Sun </Link></li>
                    <li className="reveal"><Link reloadDocument to="/eclipse/the_moon"> The Moon </Link></li>
                    <li className="reveal"><Link reloadDocument to="/eclipse/the_earth"> The Earth </Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header_Black