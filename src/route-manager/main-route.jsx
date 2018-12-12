import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {createPublicRoute} from 'pages/public';
import {AdminPage} from 'pages/admin';

export const MainRoute = () => (
    <Switch>
        {createPublicRoute('/')}
        <Route
            path="/admin"
            component={AdminPage}
        />
    </Switch>
);
