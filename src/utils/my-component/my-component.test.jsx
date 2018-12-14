import * as React from 'react';
import {shallow, render} from 'enzyme';
import {MyComponent} from './my-component';

describe('MyComponent', () => {
    test('rendering', () => {
        const wrapper = shallow(
            <MyComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });
    test('rendering', () => {
        const wrapper = render(
            <MyComponent />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
