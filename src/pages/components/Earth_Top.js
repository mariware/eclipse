import React from 'react';
import '../../index.css';
import {Link} from 'react-router-dom';

function Earth_Top() {
    return (
        <div className = "earthtop">
            <Link reloadDocument to="/eclipse/the_earth"><h1 className = "title"> THE EARTH </h1></Link>
            <p> There are fated pairs who live under the same sky as I do. This is a collection of stories dedicated to <em>them</em>. </p>
            <svg viewBox="0 0 1440 400">
                <path fill="#000000" fill-opacity="1" d="M0 218L34.3 232.7C68.7 247.3 137.3 276.7 205.8 272C274.3 267.3 342.7 228.7 411.2 214.7C479.7 200.7 548.3 211.3 617 214.8C685.7 218.3 754.3 214.7 823 228C891.7 241.3 960.3 271.7 1028.8 268.7C1097.3 265.7 1165.7 229.3 1234.2 215.8C1302.7 202.3 1371.3 211.7 1405.7 216.3L1440 221L1440 401L1405.7 401C1371.3 401 1302.7 401 1234.2 401C1165.7 401 1097.3 401 1028.8 401C960.3 401 891.7 401 823 401C754.3 401 685.7 401 617 401C548.3 401 479.7 401 411.2 401C342.7 401 274.3 401 205.8 401C137.3 401 68.7 401 34.3 401L0 401Z"></path>
            </svg>
        </div>
    )
}

export default Earth_Top