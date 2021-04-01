import React from 'react';
import { Switch,  Route} from 'react-router-dom';

import { Datails } from '../pages/Details';
import { Main } from '../pages/Main'

const Routes: React.FC = () => (
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/datails/:id" component={Datails}/>
        </Switch>
)

export default Routes;