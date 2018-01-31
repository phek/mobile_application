import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {TitleBar} from './building-blocks/titlebar/title';
import {BottomMenu} from './building-blocks/bottom-menu/menu';


class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <TitleBar title="Overview"/>
                <div id="content">
                    <div className="note">
                        <h3>Today's priorities</h3>
                        <li>Finish your website</li>
                        <li>Continue with your logo prototype</li>
                    </div>
                </div>
                <BottomMenu/>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
);
