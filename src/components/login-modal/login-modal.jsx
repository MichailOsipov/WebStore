import * as React from 'react';
import {connect} from 'react-redux';
import {makeLogin} from './epic-actions';
import {LoginView} from './login-view';

export const LoginModal = connect(
    null,
    {
        makeLogin
    }
)(({
    params,
    makeLogin
}) => {
    // didmount if authorised - gotomainpage
    const {goTo} = params;
    return (
        <LoginView
            onLogin={() => makeLogin().then(goTo.mainPage)}
            onGoMainPage={goTo.mainPage}
        />
    );
});
