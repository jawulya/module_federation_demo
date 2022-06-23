import React, {useRef, useEffect, Suspense} from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import {defaultHistory} from  './history';
const Embedded = React.lazy(() => import('./embedded'));

import {Home} from './home';


const App = () => {
    return (
        <Router history={defaultHistory}>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Embedded} />
                </Switch>
                </Suspense>
        </Router>
    );
};

export default App;