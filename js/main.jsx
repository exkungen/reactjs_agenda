import React from 'react';
import App from './app';
import { render } from 'react-dom';
import '../sass/main.scss';

window.plz = render(
    <App />
    , document.getElementById('root')
);