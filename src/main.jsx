import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {MainRoute} from './route-manager';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainRoute />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
