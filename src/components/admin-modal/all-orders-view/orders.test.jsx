import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ALL_ORDERS} from 'domains/products/api';
import {Orders} from './orders';

describe('Orders', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <Orders
                orders={MOCK_ALL_ORDERS[0].orders}
                confirmOrder={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
