import React, {useEffect, useRef} from "react";
import { bootstrap } from 'remoteApp';
import {useHistory} from "react-router-dom";

export default function MyComponent() {
    const ref = useRef();
    const history = useHistory()
    useEffect(() => {
        bootstrap(ref.current)
    }, [])
    return (
        <>
            <nav>
                <button onClick={() => history.push('/')}>to Home</button>
            </nav>
         <div ref={ref}/>
        </>
    );
}