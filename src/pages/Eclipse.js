import React from 'react';
import '../index.css';

import Header from './components/Header';
import Body from './components/Eclipse_Body';
import Footer from './components/Footer';

function Eclipse() {
    return (
        <div className = "eclipse">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Eclipse