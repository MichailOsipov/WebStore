import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {MainRoute} from './main-route';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <MainRoute />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
