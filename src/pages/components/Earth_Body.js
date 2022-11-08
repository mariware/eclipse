import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

import Top from './Earth_Top';
import Timeline from './Timeline';

function Earth_Body() {
    return (
        <div>
            <Link reloadDocument to = "/"><div className = "twilight"></div></Link>
            <Top />
            <Timeline />
        </div>
    )
}

export default Earth_Body