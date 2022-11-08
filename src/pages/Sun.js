import React from 'react';
import '../index.css';

import Header from './components/Header';
import Body from './components/Sun_Body';
import Footer from './components/Footer';

function Sun() {
    return (
        <div className = "sun">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Sun