import React from 'react';
import './stats.css';
import TopMenu from '../building-blocks/top-menu/TopMenu';

const StatsWeek = () => (
    <div>
		<TopMenu title1="Day" title2="Week" title3="Month"/>
        <div id="content">
			<div className="productivity-wrapper">
				<div className="productivity">Productivity:</div>
				<div className="productivity">55%</div>
			</div>
			<div className="days">
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
				<div className="day">
					<div className="day-name">Mon</div>
					<div className="day-productivity">60%</div>
				</div>
			</div>
				<div className="Priority">Project 10h</div>
				<div className="Priority">Project 10h</div>
				<div className="Priority">Project 10h</div>
			<div className="priorities"></div>
        </div>
    </div>
);

export default StatsWeek