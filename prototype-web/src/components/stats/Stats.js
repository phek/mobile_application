import React from 'react';
import './stats.css';
import TopMenu from '../building-blocks/top-menu/TopMenu';

const Stats = () => (
    <div>
		<TopMenu title1="Day" title2="Week" title3="Month"/>
        <div id="content">
            <div className="activityZone">
                <div className="activity">Idle</div>
				<div className="activity">Danger Zone</div>
				<div className="activity">Project</div>
            </div>
        </div>
    </div>
);

export default Stats