import {loginUser} from 'domains/user/state';
import {getInputLogin, getInputPassword} from './login-modal-form';

export const makeLogin = () => (dispatch, getState) => {
    const login = getInputLogin(getState());
    const password = getInputPassword(getState());
    return dispatch(loginUser({login, password}));
};
