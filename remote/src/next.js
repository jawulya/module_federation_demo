import React from 'react';
import {Link} from "react-router-dom";

export const Next = () => {
    return (
        <div>
            <h1>NEXT</h1>
            <p>Another Page!</p>
            <Link to="/">Navigate to Home page</Link>
        </div>
    );
};