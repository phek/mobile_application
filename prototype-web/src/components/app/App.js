import React from 'react'
import './reset.css';
import './style.css'
import Router from '../Router';
import Menu from '../building-blocks/bottom-menu/BottomMenu'

const App = () => (
    <div id="container">
        <Menu/>
        <Router/>
    </div>
);

export default App