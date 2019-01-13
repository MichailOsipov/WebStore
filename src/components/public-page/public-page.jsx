import * as React from 'react';
import {connect} from 'react-redux';
import {Grid} from '@material-ui/core';
import {logout, getAuthorizedStatus, getUserName} from 'domains/user/state';
import {Header} from './header';
import {Products} from './products';

export const PublicPage = connect(
    state => ({
        authorizedStatus: getAuthorizedStatus(state),
        name: getUserName(state)
    }),
    {
        logout
    }
)(({
    goTo,
    logout,
    authorizedStatus,
    name
}) => (
    <Grid container direction="column">
        <Grid item>
            <Header
                authorizedStatus={authorizedStatus}
                name={name}
                logout={logout}
                goTo={goTo}
            />
        </Grid>
        <Grid item>
            <Products onOpenProductInformation={goTo.productInformation} />
        </Grid>
    </Grid>
));
