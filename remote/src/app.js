import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

import {Cart} from './cart';
import {Checkout} from './checkout'

const defaultHistory = createBrowserHistory({basename: '/cart'});

const App = ({history = defaultHistory}) => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/checkout" component={Checkout} />
                <Route path="/" component={Cart} />
            </Switch>
        </Router>
    );
};

export default App;