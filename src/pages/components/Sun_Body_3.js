import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

import Top from './Sun_Top_3';
import Feed from './Feed_3';

function Sun_Body() {
    return (
        <div>
            <Link reloadDocument to = "/"><div className = "twilight"></div></Link>
            <Top />
            <Feed />
        </div>
    )
}

export default Sun_Body