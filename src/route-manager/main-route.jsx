import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import {createPublicRoute} from 'routes/public';
import {AdminPage} from 'routes/admin';
import {Modals} from 'components/modals';

export const MainRoute = () => (
    <div>
        <Switch>
            {createPublicRoute('/')}
            <Route
                path="/admin"
                component={AdminPage}
            />
        </Switch>
        <Modals />
    </div>
);
