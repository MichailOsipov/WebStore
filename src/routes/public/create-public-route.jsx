import * as React from 'react';
import {withRouter, Route} from 'react-router-dom';
import {memoize} from 'lodash';
import {concatUrls} from 'utils/concat-urls';
import {PublicPage} from 'components/public-page';
import {makeGoTo} from './make-goto';
import {ModalOpener} from './modal-opener';

const SCREEN_TYPE_PARAM = 'screenType';
const ENTITY_ID_PARAM = 'entityId';

const publicRouteComponent = path =>
    withRouter(
        ({match, history: {push}}) => {
            const goTo = makeGoTo(path, push);
            const screenType = match.params && match.params[SCREEN_TYPE_PARAM];
            const entityId = match.params && match.params[ENTITY_ID_PARAM];
            return (
                <React.Fragment>
                    <PublicPage goTo={goTo} />
                    <ModalOpener
                        screenType={screenType}
                        entityId={entityId}
                        goTo={goTo}
                    />
                </React.Fragment>
            );
        }
    );

export const createPublicRoute = memoize(
    path => (
        <Route
            path={concatUrls(path, `:${SCREEN_TYPE_PARAM}?/:${ENTITY_ID_PARAM}?`)}
            component={publicRouteComponent(path)}
        />
    )
);
