import {UserApi} from '../api';
import {setName, setAuthorizedStatus} from './actions';

export const registerUser = ({name, login, password}) => dispatch =>
    UserApi.registerUser({name, login, password})
        .then(({name: registeredName}) => {
            dispatch(setName({name: registeredName}));
            dispatch(setAuthorizedStatus({status: true}));
        });
