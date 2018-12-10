import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {PublicRoute} from 'pages/public';
import {AdminPage} from 'pages/admin';

export const MainRoute = () => (
    <Switch>
        <Route
            path="/public"
            component={PublicRoute}
        />
        <Route
            path="/admin"
            component={AdminPage}
        />
    </Switch>
);
