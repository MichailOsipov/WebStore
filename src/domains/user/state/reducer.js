import {
    SET_NAME,
    SET_AUTHORIZED_STATUS,
    SET_ROLE
} from './actions';

const DEFAULT_STATE = {
    authorized: false
};

export const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload.name
            };
        case SET_AUTHORIZED_STATUS:
            return {
                ...state,
                authorized: action.payload.status
            };
        case SET_ROLE:
            return {
                ...state,
                role: action.payload.role
            };
        default:
            return state;
    }
};
