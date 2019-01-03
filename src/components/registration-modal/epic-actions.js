import {registerUser} from 'domains/user/state';
import {getInputName, getInputLogin, getInputPassword} from './registration-modal-form';

export const register = () => (dispatch, getState) => {
    const name = getInputName(getState());
    const login = getInputLogin(getState());
    const password = getInputPassword(getState());
    return dispatch(registerUser({name, login, password}));
};
