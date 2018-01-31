import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Overview from './overview/Overview';
<<<<<<< HEAD
import Map from './map/Map';
=======
import Stats from './stats/Stats';
>>>>>>> 1b96607cf29c7c4b81ea1b72e8be550206601782

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Overview}/>
<<<<<<< HEAD
            <Route exact path='/map' component={Map}/>
=======
			<Route exact path='/Planning' component={Stats}/>
>>>>>>> 1b96607cf29c7c4b81ea1b72e8be550206601782
        </Switch>
    </main>
);

export default Router
