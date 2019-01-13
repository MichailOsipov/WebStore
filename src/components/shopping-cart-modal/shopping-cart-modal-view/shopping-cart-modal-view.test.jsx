import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_PRODUCTS_ADDED_TO_CART} from 'domains/products/api';
import {ShoppingCartModalView} from './shopping-cart-modal-view';

describe('ShoppingCartModalView', () => (
    test('rendering', () => {
        const wrapper = shallow(
            <ShoppingCartModalView
                makeAnOrder={jest.fn()}
                productsAddedToCart={MOCK_PRODUCTS_ADDED_TO_CART}
                removeProductFromCart={jest.fn()}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    })
));
