import * as React from 'react';
import {connect} from 'react-redux';
import {LoginModalForm} from './login-modal-form';
import {makeLogin} from './epic-actions';

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
        <div>
            Авторизация
            <LoginModalForm />
            <button onClick={() => makeLogin().then(goTo.mainPage)}>Логин</button>
            <button onClick={goTo.mainPage}>Назад</button>
        </div>
    );
});
