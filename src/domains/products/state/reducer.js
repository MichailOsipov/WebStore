import {
    SET_PRODUCTS,
    SET_PRODUCT_INFO,
    SET_PRODUCTS_ADDED_TO_CART,
    SET_ORDERS
} from './actions';

const DEFAULT_STATE = {
    products: [],
    productInfo: {},
    productsAddedToCart: [],
    orders: []
};

export const productsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload.products
            };
        }
        case SET_PRODUCT_INFO: {
            return {
                ...state,
                productInfo: action.payload.productInfo
            };
        }
        case SET_PRODUCTS_ADDED_TO_CART: {
            return {
                ...state,
                productsAddedToCart: action.payload.products
            };
        }
        case SET_ORDERS: {
            return {
                ...state,
                orders: action.payload.orders
            };
        }
        default:
            return state;
    }
};
