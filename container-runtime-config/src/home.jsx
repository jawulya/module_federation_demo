import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import {useFederatedComponent} from "./hooks";

export const Home = () => {
    const [{ module, scope, url }, setSystem] = useState({});
    const [config, setConfig] = useState({});

    useEffect(async () => {
        try {
            const config = await new Promise((res) => {
                setTimeout(() => {
                    res({remoteUrl: 'http://localhost:3002/remoteEntry.js'})
                }, 1000)
            })
            setConfig(config);
        } catch {}
    }, [])

    const loadRemoteApp = () => {
        if (config?.remoteUrl) {
            setSystem({
                url: config.remoteUrl,
                scope: 'remoteApp',
                module: './Button',
            });
        }
    };
    const { Component: FederatedComponent, errorLoading } = useFederatedComponent(url, scope, module);
    return (
        <div>
            <h1>We can load components in runtime</h1>
            <Link to="/">Go to Home</Link>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div style={{paddingTop: '20px'}}>
                <button onClick={loadRemoteApp} >Load Async Component</button>
                <div>
                    <React.Suspense fallback="Loading System">
                        {errorLoading
                            ? `Error loading module "${module}"`
                            : FederatedComponent && <FederatedComponent />}
                    </React.Suspense>
                </div>
            </div>
        </div>
    );
};