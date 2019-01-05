import * as React from 'react';
import {Switch} from 'react-router-dom';
import {createPublicRoute} from 'routes/public';
import {Modals} from 'components/modals';

export const MainRoute = () => (
    <div>
        <Switch>
            {createPublicRoute('/')}
        </Switch>
        <Modals />
    </div>
);
