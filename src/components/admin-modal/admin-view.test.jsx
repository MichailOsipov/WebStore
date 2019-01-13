import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ALL_ORDERS} from 'domains/products/api';
import {AdminView} from './admin-view';

describe('AdminView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <AdminView
                createNewProduct={jest.fn()}
                onGoMainPage={jest.fn()}
                confirmOrder={jest.fn()}
                allOrders={MOCK_ALL_ORDERS}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
