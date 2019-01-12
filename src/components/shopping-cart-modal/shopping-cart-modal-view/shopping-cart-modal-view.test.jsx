import * as React from 'react';
import {shallow} from 'enzyme';
import {ShoppingCartModalView} from './shopping-cart-modal-view';

describe('ShoppingCartModalView', () => (
    test('rendering', () => {
        const wrapper = shallow(
            <ShoppingCartModalView
                makeAnOrder={jest.fn()}
                productsAddedToCart={[
                    {
                        id: 1,
                        name: 'car',
                        imageSrc: 'imagesrc-car'
                    },
                    {
                        id: 2,
                        name: 'table',
                        imageSrc: 'imagesrc-table'
                    }
                ]}
                removeProductFromCart={jest.fn()}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    })
));
