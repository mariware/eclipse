import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

function Moon_Top() {
    return (
        <div className = "moontop">
            <Link reloadDocument to="/eclipse/the_moon"><h1 className = "title"> THE MOON </h1></Link>
            <p> There are people who remind me of the moonlit hours. This is a collection of artworks dedicated to <em>them</em>. </p>
            <svg viewBox="0 0 1440 400">
                <rect x="0" y="0" width="1440" height="400" fill="#000000"/>
                <Link reloadDocument to = "/eclipse/"><circle cx="720" cy="200" r="50" fill="white" /></Link>
                <path fill="#EE1B3E" fill-opacity="1" d="M0 328L34.3 331.7C68.7 335.3 137.3 342.7 205.8 324.7C274.3 306.7 342.7 263.3 411.2 268.2C479.7 273 548.3 326 617 328.7C685.7 331.3 754.3 283.7 823 264.8C891.7 246 960.3 256 1028.8 279.8C1097.3 303.7 1165.7 341.3 1234.2 360.3C1302.7 379.3 1371.3 379.7 1405.7 379.8L1440 380L1440 401L1405.7 401C1371.3 401 1302.7 401 1234.2 401C1165.7 401 1097.3 401 1028.8 401C960.3 401 891.7 401 823 401C754.3 401 685.7 401 617 401C548.3 401 479.7 401 411.2 401C342.7 401 274.3 401 205.8 401C137.3 401 68.7 401 34.3 401L0 401Z"></path>
            </svg>
        </div>
    )
}

export default Moon_Top