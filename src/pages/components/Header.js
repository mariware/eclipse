import React from 'react';
import gsap from 'gsap';
import '../../index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul className="links">
                    <li className="reveal"><Link reloadDocument to="/the_sun"> The Sun </Link></li>
                    <li className="reveal"><Link reloadDocument to="/the_moon"> The Moon </Link></li>
                    <li className="reveal"><Link reloadDocument to="/the_earth"> The Earth </Link></li>
                </ul>
            </nav>
        </header>
    )
}

document.addEventListener("DOMContentLoaded", function (e) {

    var links = document.querySelectorAll("a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        link.addEventListener("mouseover", function () {
            gsap.effects.redden(this);
        });
        link.addEventListener("mouseout", function () {
            gsap.effects.blacken(this);
        });
    }

})

gsap.registerEffect({
    name: "redden",
    defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, color: "#11E4C1" });
    }
});

gsap.registerEffect({
    name: "blacken",
    defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, color: "inherit" });
    }
});

export default Header