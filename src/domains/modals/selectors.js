import {createSelector} from 'reselect';
import {getDomain} from 'store/root-selector';
import {MODALS_STORE_KEY} from './store-key';

const getModalDomain = getDomain(MODALS_STORE_KEY);

export const getModals = createSelector(
    getModalDomain,
    ({modals = []} = {}) => modals
);
