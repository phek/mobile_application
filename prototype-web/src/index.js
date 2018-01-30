import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TestElement extends React.Component {
    render() {
        return (
            <div id="menu">
                <div className="menu_button">
                    <i className="fab fa-cloudsmith"/>
                    <div className="menu_text">Overview</div>
                </div>
                <div className="menu_button">
                    <i className="fas fa-chart-line"/>
                    <div className="menu_text">Statistics</div>
                </div>
                <div className="menu_button">
                    <i className="far fa-calendar"/>
                    <div className="menu_text">Planning</div>
                </div>
                <div className="menu_button">
                    <i className="fas fa-location-arrow"/>
                    <div className="menu_text">Map</div>
                </div>
                <div className="menu_button">
                    <i className="fas fa-cog"/>
                    <div className="menu_text">Settings</div>
                </div>
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <TestElement/>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
