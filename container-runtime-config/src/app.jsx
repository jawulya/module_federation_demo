import React, {useRef, useEffect, Suspense} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import {Home} from './home';


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;