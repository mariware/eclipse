import React from 'react';
import '../index.css';

import Header from './components/Header';
import Body from './components/Earth_Body';
import Footer from './components/Footer';

function Earth() {
    return (
        <div className = "earth">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Earth