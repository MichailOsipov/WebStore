import * as React from 'react';
import {withRouter, Route} from 'react-router-dom';

const Bank = () => <div>Bank</div>;
const Client = () => <div>Client</div>;

export const PublicRoute = withRouter(
    ({match}) => {
        const makeBaseDocumentPath = path => `${match.url}/${path}`;
        return (
            <div>
                <Route
                    path={makeBaseDocumentPath('bank')}
                    component={Bank}
                />
                <Route
                    path={makeBaseDocumentPath('client')}
                    component={Client}
                />
            </div>
        );
    }
);
