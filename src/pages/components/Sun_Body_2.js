import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

import Top from './Sun_Top_2';
import Feed from './Feed_2';

function Sun_Body() {
    return (
        <div>
            <Link reloadDocument to = "/eclipse/"><div className = "twilight"></div></Link>
            <Top />
            <Feed />
        </div>
    )
}

export default Sun_Body