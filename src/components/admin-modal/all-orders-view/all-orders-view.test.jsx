import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ALL_ORDERS} from 'domains/products/api';
import {AllOrdersView} from './all-orders-view';

describe('AllOrdersView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <AllOrdersView allOrders={MOCK_ALL_ORDERS} confirmOrder={jest.fn()} />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
