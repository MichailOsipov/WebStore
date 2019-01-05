import * as React from 'react';
import {connect} from 'react-redux';
import {RegistrationModalForm} from './registration-modal-form';
import {register} from './epic-actions';

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
        <div>
            RegistrationModal
            <RegistrationModalForm />
            <button onClick={() => register().then(goTo.mainPage)}>Зарегистрироваться</button>
            <button onClick={goTo.mainPage}>Назад</button>
        </div>
    );
});
