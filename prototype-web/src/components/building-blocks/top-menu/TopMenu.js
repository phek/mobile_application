import React from "react";
import './menu.css';

const TopMenu = (props) => (
	<div>
		<div id="menuItem">
			{props.title1}
		</div>
		<div id="menuItem">
			{props.title2}
		</div>
		<div id="menuItem">
			{props.title3}
		</div>
	</div>
);

export default TopMenu