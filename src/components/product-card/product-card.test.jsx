import * as React from 'react';
import {shallow} from 'enzyme';
import {ProductCard} from './product-card';

describe('ProductCard', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <ProductCard
                name="name"
                imageSrc="imageSrc"
                actions={(
                    <div>Actions</div>
                )}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
