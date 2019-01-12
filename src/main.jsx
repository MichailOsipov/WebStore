import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {MainRoute} from './main-route';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainRoute />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
