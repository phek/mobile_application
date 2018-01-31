import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overview from './overview/Overview';
import Map from './map/Map';
import Stats from './stats/Stats';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
            <Route exact path='/map' component={Map}/>
			<Route exact path='/Planning' component={Stats}/>
        </Switch>
    </main>
);

export default Router
