import React, {useRef, useEffect} from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import {bootstrap} from 'remoteApp/RemoteApp';

import {Home} from './home';

const App = () => {
    const ref = useRef();
    useEffect(() => {
        bootstrap(ref.current)
    }, [])
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <div ref={ref}/>
            </div>
        </Router>
    );
};

export default App;