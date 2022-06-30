import React from 'react';
import * as moment from 'moment';
import * as _ from 'lodash';
import Button from './button';

import { Link } from 'react-router-dom';

export const Cart = () => {
    const a = _.assign({});
    return (
        <div>
            <h1>CART</h1>
            <Link to="/checkout">Navigate to CHECKOUT</Link>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div style={{paddingTop: '20px'}}>
                <Button />
            </div>
        </div>
    );
};