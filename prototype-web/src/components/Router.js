import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overview from './overview/Overview';
import Map from './map/Map';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
            <Route exact path='/map' component={Map}/>
        </Switch>
    </main>
);

export default Router
