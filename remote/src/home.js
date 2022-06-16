import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <p>This is embeddable sub APP!</p>
            <Link to="/next">Navigate to Next page</Link>
        </div>
    );
};