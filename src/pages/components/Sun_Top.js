import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

function Sun_Top() {
    return (
        <div className = "suntop">
            <Link reloadDocument to = "/the_sun"><h1 className = "title"> THE SUN </h1></Link>
            <p> There is a person who reminds me of the sunlit hours. This is a collection of prose and poems dedicated to <em>him</em>. </p>
            <svg viewBox="0 0 1440 400">
                <Link reloadDocument to = "/the_sun_2"><circle cx = "720" cy = "300" r = "250" fill = "#EE1B3E" /></Link>
                <path fill = "#000000" fill-opacity = "1" d = "M0 265L34.3 257C68.7 249 137.3 233 205.8 251C274.3 269 342.7 321 411.2 350.8C479.7 380.7 548.3 388.3 617 362.3C685.7 336.3 754.3 276.7 823 264.8C891.7 253 960.3 289 1028.8 288.8C1097.3 288.7 1165.7 252.3 1234.2 265.2C1302.7 278 1371.3 340 1405.7 371L1440 402L1440 501L1405.7 501C1371.3 501 1302.7 501 1234.2 501C1165.7 501 1097.3 501 1028.8 501C960.3 501 891.7 501 823 501C754.3 501 685.7 501 617 501C548.3 501 479.7 501 411.2 501C342.7 501 274.3 501 205.8 501C137.3 501 68.7 501 34.3 501L0 501Z"></path>
            </svg>
        </div>
    )
}

export default Sun_Top