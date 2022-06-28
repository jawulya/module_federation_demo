import React from 'react';
import {noop} from "lodash";

const Button = ({name ='Cart Button', onClick=noop}) => {
    return (<button onClick={onClick}>{name}</button>)
}

export default Button;