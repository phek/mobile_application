import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Overview from './overview/Overview';
import Stats from './stats/Stats';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
			<Route exact path='/Planning' component={Stats}/>
        </Switch>
    </main>
)

export default Router
