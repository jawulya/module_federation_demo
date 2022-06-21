import ReactDOM from 'react-dom';
import React from 'react';
import App from "../app";

const el = document.createElement('ui-view');

const bootstrap = (externalEl) => {
    ReactDOM.render(<App />, externalEl || el);
}
export { bootstrap, el }