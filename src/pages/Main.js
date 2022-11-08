import React from 'react';
import '../index.css';

import Header from './components/Header';
import Body from './components/Main_Body';
import Footer from './components/Footer';

function Main() {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Main