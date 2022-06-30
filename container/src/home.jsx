import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'remoteApp/Button';
import * as moment from 'moment';
import * as _ from 'lodash';

export const Home = () => {
    const a = _.assign({});
    window.addEventListener('eventFromMfe', (customEvent) => {
        const {detail} = customEvent || {}
        console.log('data from custom event', JSON.stringify(detail))
    })

    return (
        <div>
            <h1>This is Ecommerce App</h1>
            <Link to="/cart">Navigate to Cart</Link>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div style={{paddingTop: '20px'}}>
                <Button />
            </div>
        </div>
    );
};