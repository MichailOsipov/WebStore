import * as React from 'react';
import {connect} from 'react-redux';
import {RegistrationModalForm} from './registration-modal-form';
import {register} from './epic-actions';

export const RegistrationModal = connect(
    null,
    dispatch => ({
        register: () => dispatch(register())
    })
)(({
    params,
    register
}) => {
    const {goTo} = params;
    return (
        <div>
            RegistrationModal
            <RegistrationModalForm />
            <button onClick={() => register().then(goTo.mainPage)}>Зарегистрироваться</button>
            <button onClick={() => goTo.mainPage()}>Назад</button>
        </div>
    );
});
