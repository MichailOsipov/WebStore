import {concatUrls} from 'utils/concat-urls';

export const makeGoTo = (path, push) => ({
    registration: () => {
        push(concatUrls(path, 'registration'));
    },
    login: () => {
        push(concatUrls(path, 'login'));
    },
    productInformation: (id) => {
        push(concatUrls(concatUrls(path, 'productInformation'), id));
    },
    shoppingCart: () => {
        push(concatUrls(path, 'shoppingCart'));
    },
    orders: () => {
        push(concatUrls(path, 'orders'));
    }
});
