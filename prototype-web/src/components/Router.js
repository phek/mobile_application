import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overview from './overview/Overview';
import Map from './map/Map';
import StatsDay from './stats/StatsDay';
import StatsWeek from './stats/StatsWeek';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
            <Route exact path='/map' component={Map}/>
			<Route exact path='/stats/day' component={StatsDay}/>
			<Route exact path='/stats/week' component={StatsWeek}/>
        </Switch>
    </main>
);

export default Router
