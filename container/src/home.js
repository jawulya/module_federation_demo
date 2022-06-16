import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (
        <div>
            <p>Hello World of React and Webpack!</p>
            <p>
                <Link to="/dynamic">Navigate to Dynamic Page</Link>
            </p>
        </div>
    );
};