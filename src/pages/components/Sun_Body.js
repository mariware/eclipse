import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';

import Top from './Sun_Top';
import Feed from './Feed';

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