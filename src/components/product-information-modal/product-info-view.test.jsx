import * as React from 'react';
import {shallow} from 'enzyme';
import {ProductInfoView} from './product-info-view';

describe('ProductInfoView', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <ProductInfoView
                productInfo={{name: '123', description: '345', imageSrc: '456'}}
                onGoShoppingCart={jest.fn()}
                onAddProductToCart={jest.fn()}
                onGoMainPage={jest.fn()}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
