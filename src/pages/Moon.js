import React from 'react';
import '../index.css';

import Header from './components/Header_Black';
import Body from './components/Moon_Body';
import Footer from './components/Footer';

function Moon() {
    return (
        <div className = "moon">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Moon