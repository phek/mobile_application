import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Overview from './overview/Overview';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
        </Switch>
    </main>
)

export default Router
