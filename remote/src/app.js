import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import {Home} from './home';
import {Next} from './next'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/next" component={Next} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;