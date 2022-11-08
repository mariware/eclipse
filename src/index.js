import React from 'react';
import ReactDOM from 'react-dom';
import gsap from 'gsap';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import App from './App';

function Page() {

    return (
        <HashRouter basename = "eclipse/">
            <App />
        </HashRouter>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));

var cursor = document.querySelector(".cursor");
var initCursor = false;

var trigger = document.getElementById("trigger");
if (trigger) {
    document.querySelectorAll(".reveal").forEach(element => { element.style.visibility = "hidden" });
    cursor.style.height = "70vh";
    cursor.style.width = "70vh";
    trigger.addEventListener("mouseenter", function () {
        cursor.classList.add("cursor-triggered");
        gsap.effects.redden(document.querySelector(".title")); // invert #EE1B3E
        gsap.effects.inglow(document.querySelector(".circle"));
        document.querySelectorAll(".reveal").forEach(element => { element.style.visibility = "visible" });
        document.querySelectorAll(".reveal").forEach(element => { gsap.effects.redden(element) });
    });
    trigger.addEventListener("mouseleave", function () {
        cursor.classList.remove("cursor-triggered");
        gsap.effects.outglow(document.querySelector(".circle"));
        gsap.effects.blacken(document.querySelector(".title"));
        document.querySelectorAll(".reveal").forEach(element => { gsap.effects.blacken(element) });
    });
}

window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
        cursor.style.opacity = 1;
        gsap.to(cursor, { duration: 0.3, opacity: 1 });
        initCursor = true;
    }

    gsap.to(cursor, {
        duration: 0,
        top: mouseY + "px",
        left: mouseX + "px"
    });
};

window.onmouseout = function (e) {
    gsap.to(cursor, { duration: 0.3, opacity: 0 });
    initCursor = false;
};

gsap.registerEffect({
    name: "inglow",
    defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, boxShadow: "0px 0px 50px black" });
    }
});

gsap.registerEffect({
    name: "outglow",
    defaults: { duration: 1 }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, boxShadow: "none" });
    }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();