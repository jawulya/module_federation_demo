import React, {useEffect, useRef} from "react";
import { bootstrap } from 'remoteApp';

export default function MyComponent() {
    const ref = useRef();
    useEffect(() => {
        bootstrap(ref.current)
    }, [])
    return (
        <div ref={ref}/>
    );
}