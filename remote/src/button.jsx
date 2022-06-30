import React from 'react';
import {noop} from "lodash";

const Button = ({name = 'Cart Button'}) => {
    const customEvent = new CustomEvent('eventFromMfe', {detail: {name: 'Corben Dallas'}})

    return (<button onClick={() => {
        window.dispatchEvent(customEvent)
    }}>{name}</button>)
}

export default Button;