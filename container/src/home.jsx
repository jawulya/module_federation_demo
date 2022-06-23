import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'remoteApp/Button';
import * as moment from 'moment';
import * as _ from 'lodash';

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); // en


export const Home = () => {
    const a = _.assign({});
    return (
        <div>
            <h1>This is Ecommerce App</h1>
            <Link to="/cart">Navigate to Cart</Link>
            <div style={{paddingTop: '20px'}}>
                <Button />
            </div>
        </div>
    );
};