import React from 'react';
import './stats.css';
import TopMenu from '../building-blocks/top-menu/TopMenu';

const StatsDay = () => (
    <div>
		<TopMenu title1="Day" title2="Week" title3="Month"/>
        <div id="content">
			<div className="group" id="cogs">
				<i className="fas fa-cog" id="cog"/>
			</div>
			<div id="schedule">
				<div id="times">
					<div className="time text">08:00</div>
					<div className="time text">10:00</div>
					<div className="time text">12:00</div>
					<div className="time text">15:00</div>
					<div className="time text">18:00</div>
					<div className="time text">20:00</div>
					<div className="time text">21:00</div>
				</div>
				<div className="activityZone">
					<div className="activity">
						<div className="activityText text">Idle</div>
					</div>
					<div className="activity">
						<div className="activityText text">Project</div>
					</div>
					<div className="activity">
						<div className="activityText text">Homework</div>
					</div>
					<div className="activity">
						<div className="activityText text">Danger zone</div>
					</div>
					<div className="activity">
						<div className="activityText text">Training</div>
					</div>
					<div className="activity">
						<div className="activityText text">Idle</div>
					</div>
					<div className="activity">
						<div className="activityText text">Project</div>
					</div>
				</div>
			</div>
        </div>
    </div>
);

export default StatsDay