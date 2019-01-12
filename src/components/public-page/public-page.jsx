import * as React from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import {logout, getAuthorizedStatus} from 'domains/user/state';
import {Header} from './header';
import {Products} from './products';

export const PublicPage = connect(
    state => ({
        authorizedStatus: getAuthorizedStatus(state)
    }),
    {
        logout
    }
)(({
    goTo,
    logout,
    authorizedStatus
}) => (
    <Grid container direction="column" spacing={16}>
        <Grid item>
            <Header
                authorizedStatus={authorizedStatus}
                logout={logout}
                goTo={goTo}
            />
        </Grid>
        <Grid item>
            <Products onOpenProductInformation={goTo.productInformation} />
        </Grid>
    </Grid>
));
