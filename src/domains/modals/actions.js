export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const showModal = ({name, params}) => ({type: SHOW_MODAL, payload: {name, params}});
export const closeModal = ({name}) => ({type: CLOSE_MODAL, payload: {name}});
