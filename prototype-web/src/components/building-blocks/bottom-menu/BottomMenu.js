import React from "react";
import {Link} from 'react-router-dom'
import './menu.css';

const BottomMenu = () => (
    <div id="menu">
        <Link to='/'>
            <div className="menu_button">
                <i className="fab fa-cloudsmith"/>
                <div className="menu_text">Overview</div>
            </div>
        </Link>
        <Link to='/'>
            <div className="menu_button">
                <i className="fas fa-chart-line"/>
                <div className="menu_text">Statistics</div>
            </div>
        </Link>
        <Link to='/stats/day'>
            <div className="menu_button">
                <i className="far fa-calendar"/>
                <div className="menu_text">Planning</div>
            </div>
        </Link>
        <Link to='/map'>
            <div className="menu_button">
                <i className="fas fa-location-arrow"/>
                <div className="menu_text">Map</div>
            </div>
        </Link>
        <Link to='/'>
            <div className="menu_button">
                <i className="fas fa-cog"/>
                <div className="menu_text">Settings</div>
            </div>
        </Link>
    </div>
);

export default BottomMenu