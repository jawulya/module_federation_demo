import React from 'react';
import * as moment from 'moment';
import * as _ from 'lodash';
import Button from './button';

console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); // en

import { Link } from 'react-router-dom';

export const Cart = () => {
    const a = _.assign({});
    return (
        <div>
            <h1>CART</h1>
            <Link to="/checkout">Navigate to CHECKOUT</Link>
            <div style={{paddingTop: '20px'}}>
                <Button />
            </div>
        </div>
    );
};