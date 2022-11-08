import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <nav className = "header_black">
                <ul className = "links">
                    <li className = "reveal"><Link reloadDocument to="/the_sun"> The Sun </Link></li>
                    <li className = "reveal"><Link reloadDocument to="/the_moon"> The Moon </Link></li>
                    <li className = "reveal"><Link reloadDocument to="/the_earth"> The Earth </Link></li>
                </ul>
            </nav>
            <div className = "logos">
                <a className = "social" href = "http://www.fb.com/artistmarilag" target = "blank">
                    <img className = "logo" src = {require("./images/logos/facebook.png")} alt = "Facebook" />
                </a>
                <a className = "social" href = "http://www.twitter.com/artistmarilag" target = "blank">
                    <img className = "logo" src = {require("./images/logos/twitter.png")} alt = "Twitter" />
                </a>
                <a className = "social" href = "http://www.instagram.com/theholymarilag" target = "blank">
                    <img className = "logo" src = {require("./images/logos/instagram.png")} alt = "Instagram" />
                </a>
                <a className = "social" href = "https://www.linkedin.com/in/offcllance/" target = "blank">
                    <img className = "logo" src = {require("./images/logos/linkedin.png")} alt = "LinkedIn" />
                </a>
            </div>
            <small> © 2022 Marilag. All rights reserved. </small>
        </footer>
    )
}

export default Footer

// The icons used in this footer are by FreePik and are downloaded from flaticon.com.