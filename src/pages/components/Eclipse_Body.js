import React from 'react';
import '../../index.css';
import {Link} from 'react-router-dom';

import Top1 from './Sun_Top';
import Top2 from './Moon_Top';
import Top3 from './Earth_Top_2';

function Eclipse_Body() {
    return (
        <div className = "info">
            <section className = "cover">
                <p> Introducing </p>
                <h1 className = "title" id = "name">MAR<Link reloadDocument to = "/eclipse/">I</Link>LAG</h1>
                <div className = "circle" id = "selca"></div>
            </section>
            <section className = "bg-info">
                <h2>About</h2>
                <p id = "about">I am currently a student in University of the Philippines, finishing my bachelor's degree in Computer Science. I am well-versed in multiple programming languages such as Python and Java and have knowledge in HTML and CSS. I have trained my communication and public speaking skills through competitive debating.</p>
                <br />
                <h2>Technical Proficiency</h2>
                <p id = "about">
                    <b>Programming Languages:</b> C, Java, JavaScript, Python <br />
                    <b>Web Techonologies and Frameworks:</b> HTML, CSS, React JS 
                </p>
            </section>
            <Top1 />
            <Top2 />
            <Top3 />
        </div>
    )
}

export default Eclipse_Body