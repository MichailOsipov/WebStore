import {
    SHOW_MODAL,
    CLOSE_MODAL
} from './actions';

const DEFAULT_STATE = {
    modals: []
};

export const modalsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                modals: state.modals.filter(({name}) => name !== action.payload.name).concat({
                    name: action.payload.name,
                    params: action.payload.params
                })
            };
        case CLOSE_MODAL:
            return {
                modals: state.modals.filter(({name}) => name !== action.payload.name)
            };
        default:
            return state;
    }
};
