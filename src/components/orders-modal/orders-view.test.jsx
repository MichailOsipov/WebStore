import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ORDERS} from 'domains/products/api';
import {OrdersView} from './orders-view';

describe('OrdersView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <OrdersView
                orders={MOCK_ORDERS}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
