import React from "react";
import {Link} from 'react-router-dom'
import './menu.css';

const TopMenu = (props) => (
    <div>
        <Link to='/stats/day'>
            <div className="menuItem">
                {props.title1}
            </div>
        </Link>
        <Link to='/stats/week'>
            <div className="menuItem">
                {props.title2}
            </div>
        </Link>
        <Link to='/stats/month'>
            <div className="menuItem">
                {props.title3}
            </div>
        </Link>
    </div>
);

export default TopMenu