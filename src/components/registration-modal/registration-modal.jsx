import * as React from 'react';
import {connect} from 'react-redux';
import {register} from './epic-actions';
import {RegistrationView} from './registration-view';

export const RegistrationModal = connect(
    null,
    {
        register
    }
)(({
    params,
    register
}) => {
    // didmount if authorised - gotomainpage
    const {goTo} = params;
    return (
        <RegistrationView
            onRegister={() => register().then(goTo.mainPage)}
            onGoMainPage={goTo.mainPage}
        />
    );
});
