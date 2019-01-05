import {formValueSelector} from 'redux-form';
import {LOGIN_MODAL_FORM_NAME} from './login-modal-form-name';

const valueSelector = formValueSelector(LOGIN_MODAL_FORM_NAME);

export const getInputLogin = state => valueSelector(state, 'login');
export const getInputPassword = state => valueSelector(state, 'password');
