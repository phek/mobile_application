import React from 'react';
import './overview.css';
import TitleBar from '../building-blocks/titlebar/TitleBar';

const Overview = () => (
    <div>
        <TitleBar title="Overview"/>
        <div id="content">
            <div className="note">
                <h1>Today's priorities</h1>
                <li>Finish your website</li>
                <li>Continue with your logo prototype</li>
            </div>
        </div>
    </div>
);

export default Overview