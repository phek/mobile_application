import React from "react";
import './title.css';

export class TitleBar extends React.Component {
    render() {
        return (
            <div id="title">
                {this.props.title}
            </div>
        );
    }
}