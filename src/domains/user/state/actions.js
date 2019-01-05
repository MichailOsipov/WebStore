export const SET_NAME = 'SET_NAME';
export const SET_AUTHORIZED_STATUS = 'SET_AS_AUTHORIZED';
export const SET_ROLE = 'SET_ROLE';

export const setName = ({name}) => ({type: SET_NAME, payload: {name}});
export const setRole = ({role}) => ({type: SET_ROLE, payload: {role}});
export const setAuthorizedStatus = ({status}) => ({type: SET_AUTHORIZED_STATUS, payload: {status}});
