import {UserApi} from '../api';
import {
    setName,
    setAuthorizedStatus,
    setRole
} from './actions';

export const registerUser = ({name, login, password}) => dispatch =>
    UserApi.registerUser({name, login, password})
        .then(({name: registeredName, role}) => {
            dispatch(setName({name: registeredName}));
            dispatch(setRole({role}));
            dispatch(setAuthorizedStatus({status: true}));
        });

export const loginUser = ({login, password}) => dispatch =>
    UserApi.loginUser({login, password})
        .then(({name, role}) => {
            dispatch(setName({name}));
            dispatch(setRole({role}));
            dispatch(setAuthorizedStatus({status: true}));
        });

export const logout = () => (dispatch) => {
    dispatch(setName({name: undefined}));
    dispatch(setAuthorizedStatus({status: false}));
};
