import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {MainRoute} from './route-manager';

ReactDOM.render(
    <BrowserRouter>
        <MainRoute />
    </BrowserRouter>,
    document.getElementById('root')
);
