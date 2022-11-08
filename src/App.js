import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Sun from './pages/Sun';
import Sun2 from './pages/Sun_2';
import Sun3 from './pages/Sun_3';
import Earth from './pages/Earth';
import Moon from './pages/Moon';
import Eclipse from './pages/Eclipse';

function App() {
    
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<Main />} />
                <Route path = "/the_sun" element = {<Sun />} />
                <Route path = "/the_sun_2" element = {<Sun2 />} />
                <Route path = "/the_sun_3" element = {<Sun3 />} />
                <Route path = "/the_earth" element = {<Earth />} />  
                <Route path = "/the_moon" element = {<Moon />} /> 
                <Route path = "/eclipse" element = {<Eclipse />} />   
            </Routes>
            <div className = "cursor"></div>
        </div>
    )
}

export default App