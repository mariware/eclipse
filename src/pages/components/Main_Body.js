import React from 'react';
import '../../index.css';
import {Link} from 'react-router-dom';

function Main_Body() {
    return (
        <div>
            <section className = "cover">
                <p className = "reveal"> It has started. </p>
                <h1 className = "title"> ECL<Link reloadDocument to = "/eclipse/eclipse"><span id = "trigger">I</span></Link>PSE </h1>
                <div className = "circle"></div>
            </section>
        </div>
    )
}

export default Main_Body