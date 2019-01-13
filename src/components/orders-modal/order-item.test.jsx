import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ORDERS} from 'domains/products/api';
import {OrderItem} from './order-item';

describe('OrderItem', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <OrderItem
                products={MOCK_ORDERS[0].products}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
