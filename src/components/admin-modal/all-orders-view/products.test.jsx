import * as React from 'react';
import {shallow} from 'enzyme';
import {MOCK_ALL_ORDERS} from 'domains/products/api';
import {Products} from './products';

describe('Products', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <Products
                products={MOCK_ALL_ORDERS[0].orders[0].products}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
