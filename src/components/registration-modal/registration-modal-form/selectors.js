import {formValueSelector} from 'redux-form';
import {REGISTRATION_MODAL_FORM_NAME} from './registration-modal-form-name';

const valueSelector = formValueSelector(REGISTRATION_MODAL_FORM_NAME);

export const getInputName = state => valueSelector(state, 'name');
export const getInputLogin = state => valueSelector(state, 'login');
export const getInputPassword = state => valueSelector(state, 'password');
